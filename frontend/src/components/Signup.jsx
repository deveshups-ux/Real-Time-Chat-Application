import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://real-time-chat-application-2-g8ge.onrender.com/api/v1/user/register",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    // setUser({
    //   fullName: "",
    //   username: "",
    //   password: "",
    //   confirmPassword: "",
    //   gender: "",
    // });
  };
  return (
    <div className="flex justify-center items-center  bg-base-200">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-base-100">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {/* Fullname */}
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="input input-bordered w-full"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>

          {/* Username */}
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender (FIXED) */}
          <div>
            <label className="label">
              <span className="label-text">Gender</span>
            </label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  type="radio"
                  name="gender"
                  className="radio radio-primary"
                />
                <span>Male</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  type="radio"
                  name="gender"
                  className="radio radio-primary"
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
