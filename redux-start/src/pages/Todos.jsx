import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, fetchTodos } from '../store/todoSlice'
import TodoForm from '../components/Todo/form/TodoForm'
import TodoList from '../components/Todo/list/TodoList'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    const {status, error} = useSelector(state => state.todos) 
    
    const dispatch = useDispatch()
    
    const addTask = () => {
      dispatch(addNewTodo(title))
    }
    
    useEffect(()=>{
      dispatch(fetchTodos())
    }, [])

  return (
    <div>
        <TodoForm title={title} setTitle={setTitle} addTask={addTask}/>
      {
        status === 'loading' && <h2>Loading...</h2>
      }
      {
        error && <h2>An error occured: {error}</h2>
      }
      <TodoList
        todos={todos}
        />
    </div>
  )
}

export default Todos