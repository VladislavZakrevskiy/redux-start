import React from 'react'
import UsersItems from './UsersItems'
import classes from '../UsersApi.module.css'


const UsersList = ({data}) => {
  return (
    <div className={classes.list}
    >
        {
          data.map(user => 
              <UsersItems key={user.id} user={user}/>
            )
        }

    </div>
  )
}

export default UsersList