import React from 'react'
import ApiItem from './ApiItem'

const ApiList = ({data}) => {
  return (
    <div>
        {
            data.map(item => 
                    <ApiItem key={item.id} item={item}/>
                )
        }
    </div>
  )
}

export default ApiList