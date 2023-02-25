import React, { useState } from 'react'
import {useAddProductMutation, useDeleteProductMutation, useGetGoodsQuery} from '../store/goodApi'

const GoodApi = () => {
  const [limit,setLimit] = useState()
  const [newProduct, setNewProduct] = useState()
  const {data=[], isLoading} = useGetGoodsQuery(limit)
  const [addProduct, {isError}] = useAddProductMutation()
  const [deleteProduct] = useDeleteProductMutation()

  const handleProduct = async () => {
    if(newProduct){
      await addProduct({name: newProduct}).unwrap()
      setNewProduct('')
    }
  }

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id).unwrap()
  }

  return (
    <div>
      <div>
        <input type="text" value={newProduct} onChange={e=>setNewProduct(e.target.value)}/>
        <button onClick={handleProduct}>Add product</button>
      </div>
      <div>
        <select value = {limit} onChange={e=>setLimit(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
       <ul>
          {data.map(item=> 
              <li key={item.id} onClick={()=>handleDeleteProduct(item.id)}>
                {item.name}
              </li>
            )}
       </ul>
    </div>
  )
}

export default GoodApi