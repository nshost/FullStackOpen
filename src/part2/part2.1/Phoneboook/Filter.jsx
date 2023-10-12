import React from 'react'

const Filter = ({query,handleChange}) => {
  return (
    <div>
              <p>Filter Shown with <input value={query} onChange={handleChange}/></p>

    </div>
  )
}

export default Filter