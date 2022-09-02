import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  vehicle: {},
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
        vehicle: { ...action.payload },
      };
    },
  },
});

export const {
  vehicle_load,
  loading_vehicle_request,
  loading_vehicle_success,
} = vehicleSlice.actions;

export default vehicleSlice.reducer;
