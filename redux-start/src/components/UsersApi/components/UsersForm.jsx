import React, { useState } from 'react'
import { useAddUserMutation } from '../../../store/UserApi'
import classes from '../UsersApi.module.css'


const UsersForm = () => {
    const [addUser] = useAddUserMutation()
    const [body, setBody] = useState({
        name:'',
        password:'',
        date_birth:'',
        relationship:'',
        music: '' 
    })
    const createUser = () => {
        if(body){
            console.log(body)
            addUser(body)
        }
    }
    return (
        <div>
            <input 
                className={classes.form_input} 
                type="text" 
                placeholder='Имя'
                value={body.name}
                onChange={e=>setBody({...body, name: e.target.value})}
                />
            <input 
                className={classes.form_input} 
                type="password" 
                placeholder='Пароль'
                value={body.password}
                onChange={e=>setBody({...body, password: e.target.value})}
                />
            <input 
                className={classes.form_input} 
                type="date" 
                placeholder='Дата Рождения'
                value={body.date_birth}
                onChange={e=>setBody({...body, date_birth: e.target.value})}
                />
            <input 
                className={classes.form_input} 
                type="text" 
                placeholder='Семейное положение'
                value={body.relationship}
                onChange={e=>setBody({...body, relationship: e.target.value})}
                />
            <input 
                className={classes.form_input} 
                type="text" 
                placeholder='Вид Музыки'
                value={body.music}
                onChange={e=>setBody({...body, music: e.target.value})}
                />
            <button onClick={createUser}>Создать</button>
        </div>
    )
}

export default UsersForm