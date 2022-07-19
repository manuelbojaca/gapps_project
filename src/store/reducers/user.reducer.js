import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  logged: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user_login_request(state, action) {
      return {
        ...state,
        loading: true,
        logged: false,
      };
    },
    user_login_success(state, action) {
      return {
        ...state,
        loading: false,
        logged: true,
      };
    },
    user_logout_success(state, action) {
      return {
        loading: false,
        logged: false,
        user: {},
      };
    },
    user_load(state, action) {
      return {
        ...state,
        user: { ...action.payload },
      };
    },
  },
});

export const {
  user_load,
  user_login_request,
  user_login_success,
  user_logout_success,
} = userSlice.actions;

export default userSlice.reducer;
