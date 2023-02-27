import React, { useEffect, useState } from 'react'
import ApiForm from './components/ApiForm'
import ApiList from './components/ApiList'
import ApiSelectLimit from './components/ApiSelectLimit'
import {useAddProductMutation, useDeleteProductMutation, useGetGoodsQuery, useToggleProductMutation} from '../../store/goodApi'
import { useSelector } from 'react-redux'

const GoodApi = () => {
  const userId = useSelector(state => state.todos.userId)
  const [limit,setLimit] = useState()
  const {data=[], isLoading} = useGetGoodsQuery({limit, userId})

  return (
    <div>
      <ApiForm/>
      <ApiSelectLimit limit={limit} setLimit={setLimit}/>
      {
        isLoading ? 
        <h2>Loading...</h2>
        : <ApiList data={data}/>
      }
    </div>
  )
}

export default GoodApi