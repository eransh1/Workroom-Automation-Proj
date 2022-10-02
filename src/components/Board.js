import React, { useState } from 'react'
import "../css/Board.css"
import EditCrossIcon from '../images/EditCrossIcon'
import SearchIcon from "../images/SearchIcon"
import SelectAssetCont from './SelectAssetCont'
import SelectSubAssetCont from './SelectSubAssetCont'
import AuthorNewSheet from './AuthorNewSheet'
import NoSheetImage from "../images/NoSheetImage"

const Board = ({setId,setAuthorNewSheetIsClicked,selectAsset,setSelectAsset,selectSubAsset,setSelectSubAsset}) => {
    
  return (
    <section id='board'>
        <div className='top-item-list'>
            <div className='sheets'><div className='sheet-icon'><EditCrossIcon fill="#7D7676" /></div> Sheets</div>
           <div className='search-box'>
           <input type="text" name='search' id='search-input' placeholder='Search' />
           <label className='search-icon-label' for="search-input"><SearchIcon /></label>
           </div> 
        </div> 
        <div className='mid-item-list'>
            <SelectAssetCont class1={'select-asset-cont'} class2={'select-asset-type-cont'} class3={"down-arrow"} selectAsset={selectAsset} setSelectAsset={setSelectAsset} />
            <SelectSubAssetCont class1={'select-sub-asset-cont'} class2={'select-sub-asset-type-cont'} class3={"down-arroww"} selectSubAsset={selectSubAsset} setSelectSubAsset={setSelectSubAsset} />
            <AuthorNewSheet setId={setId} setAuthorNewSheetIsClicked={setAuthorNewSheetIsClicked} />
        </div>  
        <div className='bottom-item-list'>
            <div className='no-sheet-image'>
            <NoSheetImage />
             <p className='no-sheet-text'>No sheets here. Start authoring!</p>
            </div>
        </div>     

    </section>
  )
}

export default Board