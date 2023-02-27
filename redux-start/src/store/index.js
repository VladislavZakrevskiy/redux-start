import {configureStore} from '@reduxjs/toolkit'
import { goodApi } from './goodApi'
import todoReducer from './todoSlice'
import { UserApi } from './UserApi'

export default configureStore({
    reducer: {
        todos: todoReducer,
        [goodApi.reducerPath]: goodApi.reducer,
        [UserApi.reducerPath]: UserApi.reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat([goodApi.middleware, UserApi.middleware])
    
})