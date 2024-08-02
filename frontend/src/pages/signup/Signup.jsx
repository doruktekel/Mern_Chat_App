import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" p-5 h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-100 text-center">
          Signup
          <span className="text-slate-600"> Chat App</span>
        </h1>

        <form className=" flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-100">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Doruk Tekel..."
              className="w-full input input-bordered h-10"
              onChange={handleChange}
              name="fullName"
              // onChange={(e) => {
              //   setFormData({ ...formData, fullName: e.target.value });
              // }}
              // value={formData.fullName}
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-100">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="the__mmit..."
              className="w-full input input-bordered h-10"
              onChange={handleChange}
              name="username"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-100">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="*****"
              className="w-full input input-bordered h-10"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-100">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="*****"
              name="confirmPassword"
              className="w-full input input-bordered h-10"
              onChange={handleChange}
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={formData.gender}
          />

          <Link
            to={"/login"}
            className="text-gray-100 text-sm hover:underline hover:text-slate-600"
          >
            Already have an account ?
          </Link>
          <div>
            <button
              className="btn w-full mt-2 text-slate-600"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
