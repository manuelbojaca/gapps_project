import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import routeReducer from "./reducers/route.reducer";
import routesReducer from "./reducers/routes.reducer";
import vehicleReducer from "./reducers/vehicle.reducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userAPI";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
setupListeners(store.dispatch);
