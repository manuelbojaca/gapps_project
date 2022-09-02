import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import routeReducer from "./reducers/route.reducer";
import routesReducer from "./reducers/routes.reducer";
import vehicleReducer from "./reducers/vehicle.reducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userAPI";
import { vehicleApi } from "./services/vehicleAPI";
import { routeApi } from "./services/routeAPI";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    route: routeReducer,
    [routeApi.reducerPath]: routeApi.reducer,
    routes: routesReducer,
    vehicles: vehicleReducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      vehicleApi.middleware,
      routeApi.middleware
    ),
});
setupListeners(store.dispatch);
