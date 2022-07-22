import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  route: {},
  location: [],
};

export const routeSlice = createSlice({
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
  routeSlice.actions;

export default routeSlice.reducer;
