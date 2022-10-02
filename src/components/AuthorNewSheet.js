import React from 'react'
import "../css/AuthorNewSheet.css"
import NewSheetPlus from "../images/NewSheetPlus"

const AuthorNewSheet = ({setAuthorNewSheetIsClicked,setId}) => {
  return (
    <>
        <section className='author-new-sheet ms-auto'>
            <div onClick={()=>{setAuthorNewSheetIsClicked(true);setId(0)}} className='button-for-new-sheet'>
              <NewSheetPlus />
              <p className='new-sheet-text'>Author New Sheet</p>  
            </div>
        </section>
    </>
  )
}

export default AuthorNewSheet