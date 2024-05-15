import React from 'react'

const Description = ({isEditing, value, setDescription}) => {

  if(isEditing){
    return <td>
      <input type='text' value={value}
      onChange={(e) => setDescription(e.target.value)} />
    </td>
  } else {
    return <td>{value}</td>
  }


}

export default Description