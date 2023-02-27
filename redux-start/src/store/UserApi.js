import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const UserApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: ()=>'users',
            providesTags:(result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Users', id })),
                { type: 'Users', id: 'LIST' },
              ]
            : [{ type: 'Users', id: 'LIST' }],
        }),
        addUser: build.mutation({
            query: (body)=>({
                url: 'users',
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                },
            }),
            invalidatesTags: [{type: 'Users', id: "LIST"}]
        }),
        GetOneUser: build.mutation({
            query: (password='') => ({
                url: `${password && `users?password=${password}`}`,
                method: "GET"
            }),
            invalidatesTags: [{type: 'Users', id: "LIST"}]
        })
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useGetOneUserMutation
} = UserApi