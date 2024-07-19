import React from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="h-screen p-5 flex items-center justify-center">
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
    </div>
  );
};

export default App;
