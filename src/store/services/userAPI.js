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

console.log("BASE_API", BASE_API);
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mighty-forest-62443.herokuapp.com/users",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "",
    }),
    signin: builder.mutation({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
    }),
    getUserById: builder.mutation({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useSigninMutation, useGetUserByIdMutation } =
  userApi;
