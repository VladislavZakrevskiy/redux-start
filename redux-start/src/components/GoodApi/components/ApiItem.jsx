import React from 'react'
import { useDeleteProductMutation, useToggleProductMutation } from '../../../store/goodApi'
import classes from '../GoodApi.module.css'


const ApiItem = ({item}) => {
    const [toggleProduct] = useToggleProductMutation()
    const [deleteProduct] = useDeleteProductMutation()


    const handleDeleteProduct = async (id) => {
        await deleteProduct(id).unwrap()
    }

    return (
        <div className={classes.list_item} key={item.id}>
            <input 
                type="checkbox" 
                checked={item.completed}
                onChange={()=>toggleProduct({id:item.id, bool: item.completed})}/>
            <p>{item.name}</p>
            <button 
                className={classes.delete}
                onClick={()=>handleDeleteProduct(item.id)}>
                x
            </button>
        </div>
    )
}

export default ApiItem