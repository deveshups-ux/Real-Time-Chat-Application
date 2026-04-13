import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUser } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          "https://real-time-chat-application-2-g8ge.onrender.com/api/v1/user/",
        );
        dispatch(setOtherUser(res.data));
      } catch (error) {}
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
