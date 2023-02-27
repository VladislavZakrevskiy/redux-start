import React from 'react'
import { useGetUsersQuery } from '../../store/UserApi'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

const UsersApi = () => {
    const {data, isLoading} = useGetUsersQuery()
  return (
    <div>
      <UsersForm/>
        {
            isLoading ?
            <h2>Loading...</h2>:
            <UsersList data={data}/> 
        }
    </div>
  )
}

export default UsersApi