import React from "react";

const OtherUser = (props) => {
  const user = props.user;
  return (
    <div className="cursor-pointer hover:bg-gray-800 rounded-md transition duration-200">
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
          <span className="text-sm text-gray-400">Online</span>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </div>
  );
};

export default OtherUser;
