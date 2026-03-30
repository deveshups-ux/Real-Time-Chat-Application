import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center  bg-base-200">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-base-100">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Button */}
          <button className="btn btn-primary w-full mt-4">Login</button>

          {/* Login Link */}
          <p className="text-center text-sm mt-2">
            Don't have an account?
            <Link to="/register" className="text-primary font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
