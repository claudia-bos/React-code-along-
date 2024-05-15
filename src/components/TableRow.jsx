import React from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Hours from './Hours'
import Rate from './Rate'
import formatCurrency from '../formatCurrency'
import { useState } from 'react'

const TableRow = ({initialIsEditing, initialDescription, initialRate, initialHours, deleteInvoiceRow}) => {

  const [isEditing, setIsEditing] = useState(initialIsEditing)
  const [description, setDescription] = useState(initialDescription)
  const [rate, setRate] = useState(initialRate)
  const [hours, setHours] = useState(initialHours)


  const setEditMode = () => {
    setIsEditing(true)
  }

  const setNormalMode = () => {
    setIsEditing(false)

    const editedRow = {
      id: id,
      description: description,
      rate: rate,
      hours: hours
    }

    editInvoiceRow(id, editedRow)
  }


  return (
    <tr>
          <ModeButtons 
          isEditing={isEditing}  
          setEditMode={setEditMode} 
          setNormalMode={setNormalMode}
          deleteInvoiceRow={deleteInvoiceRow}
           />

          <Description
           isEditing={isEditing} 
           value={description}
           setDescription={setDescription}
           />
          <Rate 
          isEditing={isEditing} 
          value={rate}
          setRate={setRate}
          />
          <Hours 
          isEditing={isEditing} 
          value={hours}
          setHours={setHours}/>

          <td>{formatCurrency(rate * hours)}
          </td>
    </tr>

  )
}

export default TableRow