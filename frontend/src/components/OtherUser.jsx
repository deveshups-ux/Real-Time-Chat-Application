import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = (props) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user); // ✅ onlineUsers add किया
  const user = props.user;

  const isOnline = onlineUsers?.includes(user._id); // ✅ online check

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      onClick={() => selectedUserHandler(user)}
      className={`${selectedUser?._id === user._id ? "bg-gray-700" : ""} 
      cursor-pointer rounded-md transition duration-200 flex items-center gap-2 p-2`}
    >
      {/* Profile Image + Online Dot */}
      <div className="relative">
        <img
          src={user.profilePhoto}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* ✅ Online hoto green dot */}
        {isOnline && (
          <span
            className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 
          rounded-full border-2 border-gray-800"
          ></span>
        )}
      </div>

      {/* User Info */}
      <div className="flex flex-col flex-1">
        <p className="text-white font-medium">{user?.fullName}</p>
        {/* ✅ Online/Offline text */}
        <p
          className={`text-xs ${isOnline ? "text-green-400" : "text-gray-400"}`}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </div>
  );
};

export default OtherUser;
