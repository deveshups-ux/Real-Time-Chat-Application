import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/UseGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const { otherUser } = useSelector((store) => store.user);
  if (!otherUser) return;
  return (
    <div className="flex-1 overflow-y-auto px-4">
      {otherUser?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
