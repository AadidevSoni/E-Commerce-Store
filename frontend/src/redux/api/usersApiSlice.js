import { apiSlice } from "./apiSplice";
import { USERS_URL } from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

//use${endpoint}Mutation where endpoint is login = useLoginMutation
export const  {useLoginMutation} = userApiSlice;
