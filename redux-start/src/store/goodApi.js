import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const goodApi = createApi({
    reducerPath: 'goodApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: (build) => ({
        getGoods: build.query({
            query: ({limit = '', userId = ''} ) => `goods?${userId && `userId=${userId}`}${limit && `&_limit=${limit}`}`,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Products', id })),
                { type: 'Products', id: 'LIST' },
              ]
            : [{ type: 'Products', id: 'LIST' }],
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'goods',
                method: 'POST',
                body
            }),
            invalidatesTags:[{type: 'Products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url:`goods/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        }),
        toggleProduct: build.mutation({
            query: ({id, bool}) => ({
                url: `goods/${id}`,
                method: 'PATCH',
                body: {completed: !bool}
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        })
    })
})

export const {
    useGetGoodsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useToggleProductMutation
    } = goodApi