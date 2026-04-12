import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";
import { useEffect } from "react";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser, authUser } = useSelector((store) => store.user);
  // useEffect(() => {
  //   return () => dispatch(setSelectedUser(null));
  // }, [dispatch]);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col h-screen overflow-hidden">
          {" "}
          {/* Header */}
          <div className="flex gap-2 items-center bg-zinc-800 text-white p-2">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <p>{selectedUser?.fullName}</p>
            </div>
          </div>
          {/* Messages (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-2 h-[200px]">
            <Messages />
          </div>
          {/* Input (Fixed bottom) */}
          <SendInput />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-black md:min-w-[550px]  flex-col  overflow-hidden ">
          <p className="font-bold text-black text-2xl ">
            Hello {authUser?.fullName}
          </p>
          <h1> Let's start conversation 🚀</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
