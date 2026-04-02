import React from "react";

const OtherUser = () => {
  return (
    <div className="cursor-pointer hover:bg-gray-800 rounded-md transition duration-200">
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <img
          src="https://i.pinimg.com/474x/c9/c4/95/c9c495998b979aaed08c777bf8a28f88.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* User Info */}
        <div>
          <p className="text-white font-medium">Devesh Tiwari</p>
          <span className="text-sm text-gray-400">Online</span>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </div>
  );
};

export default OtherUser;
