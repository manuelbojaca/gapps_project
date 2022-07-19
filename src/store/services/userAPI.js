import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API } from "@env";
//import axios from "axios";
/*
const userApi = async () => {
  const url = `http://127.0.0.1:3001/`;
  const response = await axios.get(url);
  return response;
};
*/
console.log("BASE_API", BASE_API);
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://192.168.10.14:3001",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

export default userApi;
