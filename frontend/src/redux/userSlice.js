import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setAuthUser, setOtherUser } = userSlice.actions;
