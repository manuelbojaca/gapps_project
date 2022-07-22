import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  route: {},
  location: [],
};

export const routesSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    loading_routes_request(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    loading_routes_success(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
    routes_load(state, action) {
      return {
        ...state,
        user: { ...action.payload },
      };
    },
  },
});

export const { route_load, loading_route_request, loading_route_success } =
  routesSlice.actions;

export default routesSlice.reducer;
