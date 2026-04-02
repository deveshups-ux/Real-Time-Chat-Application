import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
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
        <button className="btn btn-active btn-error">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
