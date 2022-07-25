import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  logged: false,
  user: {
    name: "Dominic",
    vehicle: {
      type: "Automovil",
      brand: "Mazda",
      color: "Rojo",
      plate: "FAM171",
      seats: 4,
    },
  },
  location: null,
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

    user_location(state, action) {
      return {
        ...state.user,
        location: action.payload,
      };
    },
    add_vehicle(state, action) {
      return {
        ...state,
        user: {
          ...state.user,
          vehicles: [...state.vehicles, action.payload],
        },
      };
    },
  },
});

export const {
  user_load,
  user_login_request,
  user_login_success,
  user_logout_success,
  user_location,
  add_vehicle,
} = userSlice.actions;

export default userSlice.reducer;
