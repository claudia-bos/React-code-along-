import React from 'react'

const Hours = ({isEditing, value, setHours}) => {


  if(isEditing){
    return <td>
      <input type='text' value={value} onChange={(e) => setHours(e.target.value)} />
    </td>
  } else {
    return <td>{value}</td>
  }

  
}

export default Hours