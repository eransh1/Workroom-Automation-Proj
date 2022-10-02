import React, { useState } from 'react'
import "../css/SheetAuthoring.css"
import BackArrow from '../images/BackArrow'
import NewSheetDetailIcon from '../images/NewSheetDetailIcon'
import EditCrossIcon from '../images/EditCrossIcon'
import fieldInput from '../api/FieldList'
import ScrollableFieldsItem from './ScrollableFieldsItem'
import CanvasIcon from "../images/CanvasIcon"
import ControlsIcon from "../images/ControlsIcon"
import NoSheetImage from "../images/NoSheetImage"
import ThreeDots from "../images/ThreeDots"
import DeleteButton from './DeleteButton'
import FieldTitleInput from './FieldTitleInput'
import PlusIcon from "../images/PlusIcon"
import ExpanderIcon from "../images/ExpanderIcon"
import {useDrop} from "react-dnd"

const SheetAuthoring = ({dateNTimeText,setDateNTimeText,fieldTitleText,setFieldTitleText,checkListItem1,setCheckListItem1,checkListItem2,setCheckListItem2}) => {
const[showSecDelBtn,setShowSecDelBtn]=useState(false)
const[showFieldTitleeDelBtn,setShowFieldTitleeDelBtn]=useState(false)
const[showDateNTimeDelBtn,setShowDateNTimeDelBtn]=useState(false)
const[checkListItemIsClick,setCheckListItemIsClick]=useState(false)  
const[addOptionIsClick,setAddOptionIsClick]=useState(false)
const[isExpanded,setIsExpanded]=useState(false)
const[dateNTimeTextIsClick,setDateNTimeTextIsClick]=useState(false)

const[canvasId,setCanvasId]=useState([])
const[fieldTitleeTextIsClick,setFieldTitleeTextIsClick]=useState(false)
console.log(canvasId)
  const[{isOver},drop]=useDrop(()=>({
    accept:"div",
    collect:(monitor)=>({
        isOver:!!monitor.isOver()
    }),
    drop:(item)=>{addInput(item.id)}
        }))

    function addInput(id){
      console.log(id)
      setCanvasId((prev)=>{
        return [...prev,id]
      })
      
    }    

function sectionInputContDel(value){
  const newCanvasId=canvasId.filter((item)=>{
    return item!==value;
  })
  setCanvasId(newCanvasId)
  setShowSecDelBtn(false)
}
function checkListDel(value){
  const newCanvasId=canvasId.filter((item)=>{
    return item!==value;
  })
  setCanvasId(newCanvasId)
  setShowFieldTitleeDelBtn(false)
  setCheckListItem2("Checklist Item 2")
setCheckListItem1("Checklist Item 1")
setFieldTitleText("Field Title")
setFieldTitleeTextIsClick(false)
setCheckListItemIsClick(false)
setAddOptionIsClick(false)
setIsExpanded(false)
}
function dateNTimeContDel(value){
  const newCanvasId=canvasId.filter((item)=>{
    return item!==value;
  })
  setCanvasId(newCanvasId)
  setShowDateNTimeDelBtn(false)
  setDateNTimeTextIsClick(false)
  setDateNTimeText("Field Title")
}

  return (
    <>
    <div className='top-sheet-authoring'>
      <div className='back-button'><BackArrow /></div>
      <div className='sheet-button'><NewSheetDetailIcon /><p className='sheet-button-text'>Sheets</p></div>
      <div className="sheet-authoring-title-button"><NewSheetDetailIcon /><p className='sheet-button-text'>First Piece CTQ : Tube Press Up</p></div>
      <div className='authoring-button ms-auto'>Authoring</div>
      <div className="preview-button">Preview</div>
      <div className='finish-authoring-button'>Finish Authoring</div>
    </div>

    <div className='row sheet-authoring-row'>
      <div className="col-2 sheet-authoring-left-col">
        <div className='field-title'><EditCrossIcon fill={"#7D7676"}/><p className='field-title-text'>Fields</p></div>
{fieldInput.map((item)=>{
  return <ScrollableFieldsItem item={item} id={item.id} key={item.id}/>
})}
      </div>
      <div ref={drop} className="col-7 sheet-authoring-middle-col">
        <div className='middle-field-title'><CanvasIcon /><p className='field-title-text'>Canvas</p></div>
        {canvasId.length===0?<div className='no-canvas-image'>
          <NoSheetImage />
          <p className='no-canvas-image-text'>Drag and drop fields to the canvas</p>
        </div>:null}

       {canvasId.includes(9)? <div className='section-input-cont'>
        <div onClick={()=>{setShowSecDelBtn(current=>!current)}} className='three-dots ms-auto'><ThreeDots /></div>
        {showSecDelBtn?<div onClick={()=>sectionInputContDel(9)} className="section-del-btn"><DeleteButton /></div>:null}
          <p className="section-input-text1">Section 01</p>
          <p className="section-input-text2">Section Title</p>
          <p className="section-input-text3">Section description</p>
        </div>:null}

        <div style={{display:isExpanded?"block":"flex"}}>
        {canvasId.includes(4)?<div style={{width:isExpanded?"95%":"48%"}} className='field-titlee'>
          <div className='field-title-topp'>
            <p onClick={()=>{setFieldTitleText("Component Physical Verification");setFieldTitleeTextIsClick(true)}} className={fieldTitleeTextIsClick?"field-title-topp-text-click":'field-title-topp-text'}>{fieldTitleText}</p>
            <div onClick={()=>{setShowFieldTitleeDelBtn(current=>!current)}} className='field-titlee-3-dots'><ThreeDots /></div>
            {showFieldTitleeDelBtn?<div onClick={()=>checkListDel(4)} className="field-titlee-del-btn"><DeleteButton /></div>:null}
          </div>
          <div className="field-titlee-input-cont">
             <FieldTitleInput checkListItemIsClick={checkListItemIsClick} setCheckListItemIsClick={setCheckListItemIsClick} checkListItem={checkListItem1} setCheckListItem2={setCheckListItem2} setCheckListItem1={setCheckListItem1} /> 
             <FieldTitleInput checkListItemIsClick={checkListItemIsClick} setCheckListItemIsClick={setCheckListItemIsClick} checkListItem={checkListItem2} /> 
             {addOptionIsClick?<FieldTitleInput setAddOptionIsClick={setAddOptionIsClick} checkListItem={"Checklist Item"}/>:null}
    <div style={{display:addOptionIsClick?"none":""}} onClick={()=>{setAddOptionIsClick(true)}} className='add-option-cont'><PlusIcon /><p className='add-option-text'>Add an Option</p></div>
            
    <div onClick={()=>{setIsExpanded(current=>!current)}} className='field-titlee-input-cont-expander'><ExpanderIcon /></div>
            </div>
        </div>:null}

{canvasId.includes(5)?<div className='date-time-conttt'>
  <div className='date-time-cont-top'>
    <p onClick={()=>{setDateNTimeTextIsClick(true);setDateNTimeText("Select product expiry date")}} className={dateNTimeTextIsClick?"date-time-cont-top-text-click":'date-time-cont-top-text'}>{dateNTimeText}</p>
    <div onClick={()=>{setShowDateNTimeDelBtn(current=>!current)}} className='date-time-cont-three-dotss'><ThreeDots /></div>
    {showDateNTimeDelBtn?<div onClick={()=>dateNTimeContDel(5)} className='data-time-del-btn'><DeleteButton /></div>:null}
  </div>
  <div className='date-picker'>integrate date picker (dd/mm/yyyy)</div>
</div>:null}

        </div>

      </div>
      <div className="col-2 sheet-authoring-right-col">
      <div className='end-field-title'><ControlsIcon /><p className='field-title-text'>Controls</p></div>
      </div>
    </div>
    </>
  )
}

export default SheetAuthoring