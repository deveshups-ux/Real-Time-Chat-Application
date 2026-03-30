import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <div className="app p-4 flex items-center h-screen justify-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
