import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
//create slice
const slice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = slice;
export const { setUser } = actions;
export default userReducer;
