import React, { useState } from 'react'
import "../css/FieldTitleInput.css"
import MinusIcon from "../images/MinusIcon"

const FieldTitleInput = ({setAddOptionIsClick,checkListItem,setCheckListItem2,setCheckListItem1,checkListItemIsClick,setCheckListItemIsClick}) => {
 const[circleRadioBtnIsClick,setCircleRadioBtnIsClick]=useState(false) 

  return (
   <>
<div className='field-title-inp'>
    <div onClick={()=>{setCircleRadioBtnIsClick(current=>!current)}} className='circlee'>{circleRadioBtnIsClick?<div className='circle-color'></div>:null}</div>
    <div onClick={()=>{setCheckListItemIsClick(true);setCheckListItem1("Check for dents");setCheckListItem2("Check for scratches")}} className='field-titlee-input-box'>
    <p style={{color:checkListItemIsClick?"black":"#7D7676"}} className='field-titlee-input-box-text'>{checkListItem}</p>
    </div>
    <div onClick={()=>{setAddOptionIsClick(false)}} className='minus-icon ms-auto'><MinusIcon /></div>
</div>
   </>
  )
}

export default FieldTitleInput