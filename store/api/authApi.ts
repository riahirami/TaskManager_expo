import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HttpMethod } from '../../enum/global';
import { User } from '../../models/User/User';
import { endpoints } from '../../utils/endpoints';


export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery (),
  endpoints: (builder) => ({
    login: builder.mutation<{token:string}, User>({
      query: (data) => ({
        url:endpoints.LOGIN,
        method: HttpMethod.Post ,
        body: data
      })
    }),
    register: builder.mutation({
        query: (data) => ({
          url: endpoints.REGISTER,
          method: HttpMethod.Post ,
          body: data
        })
      }), 
    })
});

export const {
  useLoginMutation,
  useRegisterMutation
} = userAPI;
