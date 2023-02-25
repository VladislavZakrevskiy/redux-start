import React from 'react'
import { addTodo } from '../../../store/todoSlice'
import classes from './TodoFrom.module.css'

const TodoForm = ({addTask,setTitle, text}) => {


  return (
    <label>
      <input className={classes.form_input} type="text" value={text} onChange={(e)=>setTitle(e.target.value)} />
      <button className={classes.form_btn} onClick={addTask}>addTodo</button>
    </label>
  )
}

export default TodoForm