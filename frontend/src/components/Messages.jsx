import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((store) => store.message);
  return (
    <div className="flex-1 overflow-y-auto px-4">
      {messages?.map((message) => (
        <Message key={message._id} message={message} />
      ))}
      ;
    </div>
  );
};

export default Messages;
