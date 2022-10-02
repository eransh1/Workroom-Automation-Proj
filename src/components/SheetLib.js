import React, { useState } from 'react'
import "../css/SheetLib.css"
import DeleteButton from './DeleteButton'

const SheetLib = ({item,id,handleSheetIdClick,value}) => {
const[moverOver,setMouseOver]=useState(false)
    
  return (
    <>
        <div className='row sheet-libb-row'>
                <div onMouseEnter={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)} style={{cursor:"pointer"}} className="col-2 sheet-lib-item">{moverOver?null:value}
                {moverOver?<div onClick={()=>{handleSheetIdClick(id)}}><DeleteButton /></div>:null}
                </div>
                <div className="col-3 sheet-lib-item">{item.sheetName}</div>
                <div className="col-2 sheet-lib-item">{item.selectAsset}</div>
                <div className="col-3 sheet-lib-item">{item.selectSubAsset}</div>
                <div className="col-1 sheet-lib-item">{item.steps}</div>
                <div className="col-1 sheet-lib-item">{value}</div>
              </div>
    </>
  )
}

export default SheetLib