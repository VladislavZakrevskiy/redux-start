import React from 'react'

const ApiSelectLimit = ({limit, setLimit}) => {
  return (
    <select value = {limit} onChange={e=>setLimit(e.target.value)}>
        <option value="">all</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
    </select>
  )
}

export default ApiSelectLimit