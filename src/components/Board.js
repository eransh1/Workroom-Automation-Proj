import React, { useState } from 'react'
import "../css/Board.css"
import EditCrossIcon from '../images/EditCrossIcon'
import SearchIcon from "../images/SearchIcon"
import SelectAssetCont from './SelectAssetCont'
import SelectSubAssetCont from './SelectSubAssetCont'
import AuthorNewSheet from './AuthorNewSheet'
import NoSheetImage from "../images/NoSheetImage"
import SheetLib from "./SheetLib"

const Board = ({handleSheetIdClick,sheetLibraryList,setId,setAuthorNewSheetIsClicked,selectAsset,setSelectAsset,selectSubAsset,setSelectSubAsset}) => {
    console.log(sheetLibraryList)
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
        {sheetLibraryList.length!==0?<div className='sheet-lib'>
        <div className='row sheet-lib-row'>
                <div className="col-2 sheet-id sheet-lib-title">Sheet Id</div>
                <div className="col-3 sheet-lib-title">Sheet Name</div>
                <div className="col-2 sheet-lib-title">Linked Asset</div>
                <div className="col-3 sheet-lib-title">Sub-Asset</div>
                <div className="col-1 sheet-lib-title">Steps</div>
                <div className="col-1 version sheet-lib-title">Version</div>
              </div>
              {sheetLibraryList.map((item,index)=>{
                return <SheetLib handleSheetIdClick={handleSheetIdClick} item={item} value={index+1} id={item.id} key={item.id} />
              })}
            </div>:null}
        {sheetLibraryList.length===0?<div className='bottom-item-list'>
              <div className='no-sheet-image'>
              <NoSheetImage />
              <p className='no-sheet-text'>No sheets here. Start authoring!</p>
              </div>

            
        </div>:null}     

    </section>
  )
}

export default Board