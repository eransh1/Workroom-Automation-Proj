import React from 'react'
import "../css/DeleteButton.css"
import DeleteIcon from "../images/DeleteIcon"

const DeleteButton = () => {
  return (
    <>
        <div className='delete-btn'><DeleteIcon /><p className='delete-btn-text'>Delete Field</p></div>
    </>
  )
}

export default DeleteButton