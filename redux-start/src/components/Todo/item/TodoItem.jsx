import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleStatus } from '../../../store/todoSlice'
import classes from './TodoItem.module.css'

const TodoItem = ({id, completed, title}) => {
  const dispatch = useDispatch()


  return (
    <li className={classes.list_el} key={id}> 
      <input className={classes.checkTodo} type='checkbox' checked={completed} onChange={()=> dispatch(toggleStatus(id))}/>
      <p style={{textDecoration: completed ? 'line-through' : ''}} className={classes.textTodo}>{title}</p>
      <span onClick={()=>dispatch(deleteTodo(id))} className={classes.deleteTodo}>x</span>
    </li>
  )
}

export default TodoItem