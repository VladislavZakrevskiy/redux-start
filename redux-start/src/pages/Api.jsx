import React, { useState } from 'react'
import GoodApi from '../components/GoodApi/GoodApi'
import UsersApi from '../components/UsersApi/UsersApi'

const Api = () => {
    const [select, setSelect] = useState('users')
  return (
    <div>
        <div>
            <button onClick={()=>{
            setSelect('items')
        }}>
                Items
            </button>
            <button onClick={()=>setSelect('users')}>
                Users
            </button>
        </div>
        {
            select === 'items' ?
            <GoodApi/> 
            : <UsersApi/>
        }
    </div>
  )
}

export default Api