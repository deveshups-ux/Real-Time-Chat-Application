import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/signUp";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Signup /> },
]);

const App = () => {
  const { authUser } = useSelector((store) => store.user);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:8080");

    socket.on("connect", () => {
      console.log("✅ Socket connected! ID:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.log("❌ Connection failed:", err.message);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="app p-4 flex items-center h-screen justify-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
