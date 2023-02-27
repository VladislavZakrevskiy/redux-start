import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
        'todos/fetchTodos',
        async function (_, {rejectWithValue}) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

                if(!response.ok){
                    throw new Error('addingTodos ServerError')
                }
                else {
                    const data = response.json()
                    return data
                }
            } catch (error) {
                return rejectWithValue(error.message)
            }
        }
    )

export const deleteTodo = createAsyncThunk(
        'todos/deleteTodo',
        async function (id, {rejectWithValue, dispatch}) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
                    method: 'DELETE'
                })
                console.log(response)
                if(!response.ok){
                    throw new Error('deleteTask: serverError')
                }
                dispatch(removeTodo({id}))
            } catch (error) {
                return rejectWithValue(error.message)
            }
        }   
    )

export const toggleStatus = createAsyncThunk(
        'todos/toggleStatus',
        async function (id, {rejectWithValue, getState, dispatch}) {
            const todo = getState().todos.todos.find(todo=> todo.id === id)
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        completed: !todo.completed
                    })
                
                })
                if(!response.ok){
                    throw new Error('toggling ServerError')
                }
                dispatch(toggleTodoComplete({id}))
            } catch (error) {
                return rejectWithValue(error.message)
            }
        }
    )

export const addNewTodo = createAsyncThunk(
        'todos/addNewTodo',
        async function (title, {rejectWithValue, dispatch}) {
            try {
                const todo = {
                    title: title, 
                    userId: 1,
                    completed: false
                }
                const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(todo)
                })

                if(!response.ok){
                    throw new Error("addTodo ServerError")
                }

                const data = await response.json()
                dispatch(addTodo(data))

            } catch (error) {
                return rejectWithValue(error.message)
            } 
        }
    )

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        status: null,
        error: null,
        userId: 1,
    },
    reducers: {
        addTodo(state, action){
            state.todos.push(action.payload)
        },
        toggleTodoComplete(state, action){
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        setUserId(state, action){
            state.userId = action.payload.userId
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) =>{
            state.status = 'loading'
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) =>{
            state.status = 'resolved'
            state.todos = action.payload
        },
        [fetchTodos.rejected]: (state, action) =>{
            state.status = 'rejected'
            state.error = action.payload
        },
        [deleteTodo.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [toggleStatus.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        } 
    
        }
})

export const {addTodo, removeTodo, toggleTodoComplete, setUserId} = todoSlice.actions;

export default todoSlice.reducer