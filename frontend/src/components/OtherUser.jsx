import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = (props) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const user = props.user;
  const selectedUserHandler = (user) => {
    console.log(user);
    dispatch(setSelectedUser(user));
  };
  return (
    <div
      onClick={() => selectedUserHandler(user)}
      className={` ${selectedUser?._id === user._id ? "bg-gray-700" : ""} cursor-pointer rounded-md transition duration-200`}
    >
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <img
          src={user.profilePhoto}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* User Info */}
        <div>
          <p className="text-white font-medium">{user?.fullName}</p>
          {/* <span className="text-sm text-gray-400">Online</span> */}
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </div>
  );
};

export default OtherUser;
