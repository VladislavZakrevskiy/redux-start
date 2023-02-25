import {configureStore} from '@reduxjs/toolkit'
import { goodApi } from './goodApi'
import todoReducer from './todoSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
        [goodApi.reducerPath]: goodApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodApi.middleware)
})