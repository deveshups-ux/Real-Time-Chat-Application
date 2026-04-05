import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");
      console.log(res);
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col  h-full p-4 border-r  h-screen border-gray-700">
      {/* Search Box */}
      <form className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md bg-gray-800 text-white outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <IoSearchSharp className="text-white text-xl" />
        </button>
      </form>

      {/* Divider */}
      <div className="divider"></div>

      {/* Users List */}
      <OtherUsers />
      <div>
        <button onClick={logoutHandler} className="btn btn-active btn-error">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
