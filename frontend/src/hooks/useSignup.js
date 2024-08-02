import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useContext(AuthContext);

  const signup = async ({
    username,
    fullName,
    gender,
    password,
    confirmPassword,
  }) => {
    const success = handleInputErrors({
      username,
      fullName,
      gender,
      password,
      confirmPassword,
    });

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          fullName,
          gender,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
  username,
  fullName,
  gender,
  password,
  confirmPassword,
}) => {
  if (!username || !fullName || !gender || !password || !confirmPassword) {
    toast.error("Fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not matched");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
