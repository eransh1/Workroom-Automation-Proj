import React from 'react'
import "../css/NewSheetModal.css"
import AuthorFromScratch from "../images/AuthorFromScratch"
import ChooseFromTemplate from "../images/ChooseFromTemplate"

const NewSheetModal = ({setAfsClick,setCftClick,setAuthorNewSheetIsClicked,setSelectAsset,setSelectSubAsset}) => {
  return (
    <section id='new-sheet-modal'>
        <div className='new-sheet-modal'>
            <p className='new-sheet-modal-heading'>How do you want to start?</p>
            <div className='row new-sheet-modal-row'>
                <div className='col-6 new-sheet-modal-left-col'>
                    <div onClick={()=>{setAfsClick(true);setAuthorNewSheetIsClicked(false);setSelectAsset("");setSelectSubAsset("")}} className='afs-icon'><AuthorFromScratch /></div>
                    <p className='afs-title'>Author from Scratch</p>
                    <p className='afs-text'>Build a sheet by dragging & dropping using the authoring module, from scratch </p>
                </div>
                <div className='col-6 new-sheet-modal-right-col'>
                    <div onClick={()=>{setCftClick(true);setAuthorNewSheetIsClicked(false)}} className='cft-icon'><ChooseFromTemplate /></div>
                    <p className='cft-title'>Choose from Templates </p>
                    <p className='cft-text'>Choose an already built sheet from our extensive sheets library and edit on top of it</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewSheetModal