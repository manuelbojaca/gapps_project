import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API } from "@env";

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
    getVehicleById: builder.mutation({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
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
  useGetVehicleByIdMutation,
  useCreateVehicleMutation,
  useEditVehicleMutation,
  useDeleteVehicleMutation,
} = vehicleApi;
