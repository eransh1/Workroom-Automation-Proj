import React, { useState } from 'react'
import "../css/SelectSubAssetCont.css"
import DownArrow from "../images/DownArrow"

const SelectSubAssetCont = ({selectSubAsset,setSelectSubAsset,class1,class2,class3}) => {
  const[idd,setIdd]=useState()
  const[color,setColor]=useState()
  const[color2,setColor2]=useState()
  const[wantToSubSelect,setWantToSubSelect]=useState(false)
  return (
    <div>
    <div onClick={()=>{setWantToSubSelect(current=>!current)}} className={class1}>
        <input type="button" id='select-sub-asset'></input>
        <label className={class3} for="select-sub-asset"><DownArrow /></label>
        <label onClick={()=>{setWantToSubSelect(current=>!current)}} className='select-sub-asset-text' for="select-sub-asset">{selectSubAsset}</label>
    </div>
    {wantToSubSelect?<div className={class2}>
        <div onMouseEnter={()=>{setColor("#D0EBFF");setColor2("white")}} style={{background:color}} onClick={()=>{setIdd(1);setWantToSubSelect(false);setSelectSubAsset("Press Up Station")}} className={'pus-type '+(idd===1?"selected-type":"")}>Press Up Station</div>
        <div onMouseEnter={()=>{setColor2("#D0EBFF");setColor("white")}} style={{background:color2}} onClick={()=>{setIdd(2);setWantToSubSelect(false);setSelectSubAsset("Knockdown Station")}} className={'ks-type '+(idd===2?"selected-type":"")}>Knockdown Station</div>
    </div>:null}
    </div>
  )
}

export default SelectSubAssetCont