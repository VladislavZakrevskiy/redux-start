import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAddProductMutation } from '../../../store/goodApi'

const ApiForm = () => {
    const [newProduct, setNewProduct] = useState()
    const [addProduct, {isError}] = useAddProductMutation()
    const userId = useSelector(state => state.todos.userId)

    const handleProduct = async () => {
        if(newProduct){
          await addProduct({name: newProduct, userId: userId}).unwrap()
          setNewProduct('')
        }
      }

  return (
    <div>
        <input type="text" value={newProduct} onChange={e=>setNewProduct(e.target.value)}/>
        <button onClick={handleProduct}>Add product</button>
    </div>
  )
}

export default ApiForm