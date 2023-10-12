import React from 'react'
const PersonForm = ({handleAddPerson, name , number , handleChangeName , handleChangeNumber}) => {
  return (
    <div>
          <form onSubmit={handleAddPerson}>
        <p>
          Name: 
          <input value={name} onChange={handleChangeName}/>
        </p>
        <p>
          Number: 
          <input value={number} onChange={handleChangeNumber}/>
        </p>
      
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default PersonForm