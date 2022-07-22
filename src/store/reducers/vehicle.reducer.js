import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  route: {},
  location: [],
};

export const vehicleSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    loading_vehicle_request(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    loading_vehicle_success(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
    vehicle_load(state, action) {
      return {
        ...state,
        user: { ...action.payload },
      };
    },
  },
});

export const { route_load, loading_route_request, loading_route_success } =
  vehicleSlice.actions;

export default vehicleSlice.reducer;
