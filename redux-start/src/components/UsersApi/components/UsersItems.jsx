import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTemplate } from '../../../hooks/useTemplate'
import { setUserId } from '../../../store/todoSlice'
import { useGetOneUserMutation, useGetOneUserQuery } from '../../../store/UserApi'
import classes from '../UsersApi.module.css'

const UsersItems = ({user}) => {
  const [getOneUser, {error, isSuccess}] = useGetOneUserMutation()
  let dispatch = useDispatch()
  const [password, setPassword] = useState('')

  const changeUserId = async (userId) => {
    const data = await getOneUser(password)
    console.log(data)
    console.log(isSuccess)
    if(isSuccess){
      dispatch(setUserId({userId}))
    }
    else console.log(error)
  }

  return (
    <div className={classes.card}>
        <p key={user.name} className={classes.info}>
          {user.id}. {user.name}
        </p>
        <p key={user.date_birth} className={classes.info}>
          {user.date_birth}
        </p>
        <p key={user.relationship} className={classes.info}>Relationship: {user.relationship}</p>
        <p key={user.music} className={classes.info}>Music: {user.music}</p>
        <input className={classes.choose_input} type="text" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Пароль пользователя'/>
        <button onClick={()=>changeUserId(user.id)} className={classes.choose_btn}>Choose User</button>
    </div>
  )
}

export default UsersItems