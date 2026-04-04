import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import OtherUser from "../components/OtherUser.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
