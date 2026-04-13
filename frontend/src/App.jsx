import React, { useEffect } from "react"; // ✅ useState हटाओ
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setOnlineUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice"; // ✅ यह import add करो

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Signup /> },
]);

const App = () => {
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const newSocket = io(window.location.origin, {
        query: {
          userId: authUser._id,
        },
      });

      dispatch(setSocket(newSocket));
      newSocket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      return () => {
        newSocket.close();
        dispatch(setSocket(null));
      };
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="app p-4 flex items-center h-screen justify-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
