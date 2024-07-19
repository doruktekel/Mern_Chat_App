import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" p-5 h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-100 text-center">
          Signup
          <span className="text-slate-600"> Chat App</span>
        </h1>

        <form className=" flex flex-col gap-2">
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
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />

          <a
            href=""
            className="text-gray-100 text-sm hover:underline hover:text-slate-600"
          >
            Already have an account ?
          </a>
          <div>
            <button className="btn w-full mt-2 text-slate-600">Sign Up </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
