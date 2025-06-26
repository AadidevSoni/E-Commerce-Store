import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product','Order','User','Category'],
  endpoints: () => ({}),
});
/*
This is a boilerplate setup of RTK Query with:

A shared baseQuery

Declared tags for caching

Empty endpoints (to be injected later)
*/