import React ,{useState}from 'react'
import "../css/SelectAssetCont.css"
import DownArrow from "../images/DownArrow"

const SelectAssetCont = ({selectAsset,setSelectAsset,class1,class2,class3}) => {
    const[idd,setIdd]=useState()
    const[color,setColor]=useState()
    const[color2,setColor2]=useState()
    const[wantToSelect,setWantToSelect]=useState(false)
  return (
    <>
    <div>
    <div onClick={()=>{setWantToSelect(current=>!current)}}  className={class1}>
        <input type="button" id='select-asset'></input>
        <label className={class3} for="select-asset"><DownArrow /></label>
        <label onClick={()=>{setWantToSelect(current=>!current)}} className='select-asset-text' for="select-asset">{selectAsset}</label>
    </div>
    {wantToSelect?<div className={class2}>
    <div onMouseEnter={()=>{setColor("#D0EBFF");setColor2("white")}} style={{background:color}} onClick={()=>{setIdd(1);setWantToSelect(false);setSelectAsset("Heavy Duty Line")}} className={'hdl-type '+(idd===1?"selected-type":"")}>Heavy Duty Line</div>
    <div onMouseEnter={()=>{setColor2("#D0EBFF");setColor("white")}} style={{background:color2}} onClick={()=>{setIdd(2);setWantToSelect(false);setSelectAsset("Light Duty Line")}} className={'ldl-type '+(idd===2?"selected-type":"")}>Light Duty Line</div>
    </div>:null}
    </div>
    </>
  )
}

export default SelectAssetCont