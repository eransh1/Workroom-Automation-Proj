import React from 'react'
import "../css/SheetDetailModal.css"
import NewSheetDetailIcon from "../images/NewSheetDetailIcon"
import SelectAssetCont from './SelectAssetCont'
import SelectSubAssetCont from './SelectSubAssetCont'

const SheetDetailModal = ({setDisplayCont,setAfsClick,setStartAuthoringBtnClick,selectAsset,setSelectAsset,selectSubAsset,setSelectSubAsset,sheetName,setSheetName,sheetDesc,setSheetDesc}) => {
  
  function checkInput(){
    if(sheetName.length!==0&&sheetDesc.length!==0&&selectAsset.length!==0&&selectSubAsset.length!==0){
        setStartAuthoringBtnClick(true);setAfsClick(false);setDisplayCont(false)
    }
    else(alert("Fill Data"))
  }
  
    return (
    <section id='sheet-detail-modal'>
        <div className='sheet-detail-modal'>
            <div className='top-of-sheet-detail'>
                <NewSheetDetailIcon />
                <p className='top-of-sheet-detail-text'> New Sheet Details</p>
            </div>
            <div className='sheet-name-cont'>
                <p className='sheet-name-text'>Sheet Name</p>
                <div onClick={()=>{setSheetName("First Piece CTQ : Tube Press Up");setSheetDesc("Production Batch Inspection of Tube Press Up: First Piece")}} className='sheet-name-input'>{sheetName}</div>
            </div>
            <div className='sheet-desc-cont'>
                <p className='sheet-desc-text'>Sheet Description</p>
                <div className='sheet-desc-input'>{sheetDesc}</div>
            </div>
            <div className='row sheet-detail-modal-row'>
                <div className="col-6 sheet-detail-modal-left-col">
                    <p className='sheet-detail-modal-left-col-text'>Asset</p>
                    <SelectAssetCont class1={'select-asset-cont cont1'} class2={'select-asset-type-cont cont2'} class3={"down-arrow cont3"} selectAsset={selectAsset} setSelectAsset={setSelectAsset} />
                </div>
                <div className="col-6 sheet-detail-modal-right-col">
                <p className='sheet-detail-modal-right-col-text'>Sub-Asset</p>
                <div style={{position:"relative"}}><SelectSubAssetCont class1={'select-sub-asset-cont'} class2={'select-sub-asset-type-cont'} class3={"down-arroww contt3"} selectSubAsset={selectSubAsset} setSelectSubAsset={setSelectSubAsset} /></div>
                </div>
            </div>
            <div style={{display:"flex",alignItem:"center",placeContent:"center"}}><div onClick={checkInput} className='start-authoring-btn'>Start Authoring</div></div>
        </div>
    </section>
  )
}

export default SheetDetailModal