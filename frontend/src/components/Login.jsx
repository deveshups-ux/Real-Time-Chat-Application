import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log(res);
      navigate("/");
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center  bg-base-200">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-base-100">
        <h1 className="text-3xl font-bold text-center mb-6">Login up</h1>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {/* Username */}
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>

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
