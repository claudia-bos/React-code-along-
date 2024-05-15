import React from 'react'

const AddButtons = ({addInvoiceRow}) => {
  return (
    <tr>
      <td></td>
      <td colSpan={10}>
        <button onClick={addInvoiceRow}>Add</button>
      </td>
    </tr>
  )
}

export default AddButtons