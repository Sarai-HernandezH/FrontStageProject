import { shopApi } from './shopApi';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../firebase'

export const userProfileApi = createApi({
    reducerPath: 'userProfileApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getUserProfile: builder.query({
            query: (localId) => `userProfiles/${localId}.json`,
        }),
        updateUserProfile: builder.mutation({
            query: ({ localId, profile }) => ({
                url: `userProfiles/${localId}.json`,
                method: 'PUT',
                body: profile,
            }),
        }),
    }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userProfileApi;
