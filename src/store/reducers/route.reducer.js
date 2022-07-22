import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  route: {},
  location: [],
};

export const userSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    loading_route_request(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    loading_route_success(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
    route_load(state, action) {
      return {
        ...state,
        user: { ...action.payload },
      };
    },
  },
});

export const { route_load, loading_route_request, loading_route_success } =
  userSlice.actions;

export default userSlice.reducer;
