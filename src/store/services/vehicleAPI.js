import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API } from "@env";
import { vehicle_load } from "../reducers/vehicle.reducer";

const _retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token").then((data) =>
      console.log("Dataf:", data)
    );
    if (value !== null) {
      return token;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mighty-forest-62443.herokuapp.com/vehicles",
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => "",
    }),
    /*getVehicleById: builder.mutation({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },

      }),
    }),*/
    getVehicleById: builder.query({
      query: (id, token) => `/${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(vehicle_load(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    /*
    createVehicle: builder.mutation({
      query: ({ body, token }) => ({
        url: "/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body,
      }),
    }),
    */
    getVehicleById: builder.query({
      query: (body, token) => "/",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(vehicle_load(data));
        } catch (err) {
          console.log();
        }
      },
    }),
    editVehicle: builder.mutation({
      query: ({ id, body, token }) => ({
        url: `/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
    deleteVehicle: builder.mutation({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useEditVehicleMutation,
  useDeleteVehicleMutation,
} = vehicleApi;
