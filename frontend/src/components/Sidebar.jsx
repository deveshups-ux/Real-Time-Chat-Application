import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setOtherUser } from "../redux/userSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { otherUser } = useSelector((store) => store.user);
  const logoutHandler = async () => {
    try {
      const res = await axios.get(
        "https://real-time-chat-application-2-g8ge.onrender.com/api/v1/user/logout",
      );
      navigate("/login");
      dispatch(setAuthUser(null));
      toast.success(res.data.message);
    } catch (error) {}
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const conversationUser = otherUser?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()),
    );
    if (conversationUser) {
      dispatch(setOtherUser([conversationUser]));
    } else {
      toast.error("user not found");
    }
  };
  return (
    <div className=" flex flex-col  h-full p-4 border-r  h-screen border-gray-700">
      {/* Search Box */}
      <form
        onSubmit={searchSubmitHandler}
        className="flex items-center gap-2 mb-4"
      >
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
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
