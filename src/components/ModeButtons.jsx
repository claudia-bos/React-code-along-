import React from 'react'

const ModeButtons = ({isEditing, setEditMode, setNormalMode, deleteInvoiceRow}) => {
    // const {isEditing} = props

    if(isEditing) {
        return <td>
            <button onClick={setNormalMode}>Save</button>
        </td>
    } else {
        return <td>
            <button onClick={deleteInvoiceRow}>Delete</button>
            <button onClick={setEditMode}>Edit</button>
        </td>
    }
 
}
export default ModeButtons