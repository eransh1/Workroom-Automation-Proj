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
import TriggerTicIcon from "../images/TriggerTicIcon"

const SheetAuthoring = ({canvasId,setCanvasId,handleFinishAuthoringClick,checkListItemId,setCheckListItemId,dateNTimeText,setDateNTimeText,fieldTitleText,setFieldTitleText,checkListItem1,setCheckListItem1,checkListItem2,setCheckListItem2}) => {
const[showSecDelBtn,setShowSecDelBtn]=useState(false)
const[showFieldTitleeDelBtn,setShowFieldTitleeDelBtn]=useState(false)
const[showDateNTimeDelBtn,setShowDateNTimeDelBtn]=useState(false)
const[checkListItemIsClick,setCheckListItemIsClick]=useState(false)  

const[isExpanded,setIsExpanded]=useState(false)
const[dateNTimeTextIsClick,setDateNTimeTextIsClick]=useState(false)
const[checklistBoxIsClick,setchecklistBoxIsClick]=useState(false)
const[dNTBoxIsClick,setdNTBoxIsClick]=useState(false)

const[checklistReq,setChecklistReq]=useState(false)
const[checklistTrigger,setChecklistTrigger]=useState(false)
const[dateNTimeReq,setDateNTimeReq]=useState(false)
const[dateNTimeTrigger,setDateNTimeTrigger]=useState(false)

const[isChecklistTriggered,setisChecklistTriggered]=useState(false)
const[isDNTTriggered,setisDNTTriggered]=useState(false)

const[checklistCircleRadioBtnIsClick,setChecklistCircleRadioBtnIsClick]=useState(false)
const[dNTCircleRadioBtnIsClick,setDNTCircleRadioBtnIsClick]=useState(false) 
const[fieldTitleeTextIsClick,setFieldTitleeTextIsClick]=useState(false)

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
setCheckListItemId([])
setIsExpanded(false)
setChecklistReq(false)
setChecklistTrigger(false)
setchecklistBoxIsClick(false)
setChecklistCircleRadioBtnIsClick(false)
setisChecklistTriggered(false)
}
function dateNTimeContDel(value){
  const newCanvasId=canvasId.filter((item)=>{
    return item!==value;
  })
  setCanvasId(newCanvasId)
  setShowDateNTimeDelBtn(false)
  setDateNTimeTextIsClick(false)
  setDateNTimeText("Field Title")
  setdNTBoxIsClick(false)
  setDateNTimeReq(false)
setDateNTimeTrigger(false)
setDNTCircleRadioBtnIsClick(false)
setisDNTTriggered(false)
}

function handleAddOptionClick(){
  const time=new Date().getTime()
  setCheckListItemId((prev)=>{
    return [...prev,{id:time,checkListItem:"Checklist Item"}]
  })

}

function handleMinusIconClick(id){
 const newcheckListItemId=checkListItemId.filter((item)=>{
  return item.id!==id;
 })
  setCheckListItemId(newcheckListItemId)
}

  return (
    <>
    <div className='top-sheet-authoring'>
      <div className='back-button'><BackArrow /></div>
      <div className='sheet-button'><NewSheetDetailIcon /><p className='sheet-button-text'>Sheets</p></div>
      <div className="sheet-authoring-title-button"><NewSheetDetailIcon /><p className='sheet-button-text'>First Piece CTQ : Tube Press Up</p></div>
      <div className='authoring-button ms-auto'>Authoring</div>
      <div className="preview-button">Preview</div>
      <div onClick={handleFinishAuthoringClick} className='finish-authoring-button'>Finish Authoring</div>
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

       {canvasId.includes(9)? <div style={{zIndex:"5"}} className='section-input-cont'>
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
            <div className='star-and-trigger-cont'>
              {checklistReq?<p className='star'>*</p>:null}
              {checklistTrigger?<p className='trigger'>Trigger :  <div className='trigger-tic-con'><TriggerTicIcon /></div></p>:null}
            </div>
            <div onClick={()=>{setShowFieldTitleeDelBtn(current=>!current)}} className='field-titlee-3-dots'><ThreeDots /></div>
            {showFieldTitleeDelBtn?<div onClick={()=>checkListDel(4)} className="field-titlee-del-btn"><DeleteButton /></div>:null}
          </div>
          <div onClick={()=>{setchecklistBoxIsClick(true);setdNTBoxIsClick(false)}} className="field-titlee-input-cont">
             <FieldTitleInput cursor={"no-drop"} checkListItemIsClick={checkListItemIsClick} setCheckListItemIsClick={setCheckListItemIsClick} checkListItem={checkListItem1} setCheckListItem2={setCheckListItem2} setCheckListItem1={setCheckListItem1} /> 
             <FieldTitleInput cursor={"no-drop"} checkListItemIsClick={checkListItemIsClick} setCheckListItemIsClick={setCheckListItemIsClick} checkListItem={checkListItem2} />

             {checkListItemId.map((item)=>{return <FieldTitleInput handleMinusIconClick={handleMinusIconClick} id={item.id} key={item.id} checkListItem={item.checkListItem}/>})} 

    <div onClick={handleAddOptionClick} className='add-option-cont'><PlusIcon /><p className='add-option-text'>Add an Option</p></div>
            
    <div onClick={()=>{setIsExpanded(current=>!current)}} className='field-titlee-input-cont-expander'><ExpanderIcon /></div>
            </div>
        </div>:null}

{canvasId.includes(5)?<div className='date-time-conttt'>
  <div className='date-time-cont-top'>
    <p onClick={()=>{setDateNTimeTextIsClick(true);setDateNTimeText("Select product expiry date")}} className={dateNTimeTextIsClick?"date-time-cont-top-text-click":'date-time-cont-top-text'}>{dateNTimeText}</p>
    <div className='star-and-trigger-cont'>
              {dateNTimeReq?<p className='star'>*</p>:null}
             {dateNTimeTrigger?<p className='trigger'>Trigger :  <div className='trigger-tic-con'><TriggerTicIcon /></div></p>:null}
            </div>
    <div onClick={()=>{setShowDateNTimeDelBtn(current=>!current)}} className='date-time-cont-three-dotss'><ThreeDots /></div>
    {showDateNTimeDelBtn?<div onClick={()=>dateNTimeContDel(5)} className='data-time-del-btn'><DeleteButton /></div>:null}
  </div>
  <div onClick={()=>{setchecklistBoxIsClick(false);setdNTBoxIsClick(true)}} className='date-picker'>integrate date picker (dd/mm/yyyy)</div>
</div>:null}

        </div>
<div onClick={()=>{setchecklistBoxIsClick(false);setdNTBoxIsClick(false)}} className='clickable-cont'></div>
      </div>
      <div className="col-2 sheet-authoring-right-col">
      <div className='end-field-title'><ControlsIcon /><p className='field-title-text'>Controls</p></div>
      {checklistBoxIsClick||dNTBoxIsClick?<p className='control-field-text'>Field: <span style={{color:"black",fontWeight:"700"}}>Checklist</span></p>:null}
      <div style={{display:checklistBoxIsClick?"block":"none"}} className='comp-phys-verf-cont'>
<p className='comp-phys-verf-cont-text'>{fieldTitleText}</p>
<div style={{margin:"0"}} className='row comp-phys-verf-cont-toggle-row'>
  <div style={{padding:"0"}} className="col-6 comp-phys-verf-cont-toggle-left-col">
  <div onClick={()=>{setChecklistCircleRadioBtnIsClick(current=>!current);setChecklistReq(current=>!current)}} className='circlee'>{checklistCircleRadioBtnIsClick?<div className='circle-color'></div>:null}</div>
  <p className='req-text'>Required</p>
  </div>
  <div style={{padding:"0"}} className="col-6 comp-phys-verf-cont-toggle-right-col">
    <p className='trigger-text'>Trigger</p>

    <div class="form-check form-switch">
  <input onClick={()=>{setChecklistTrigger(current=>!current);setisChecklistTriggered(current=>!current)}} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isChecklistTriggered}/>
</div>

  </div>
</div>
      </div>
     <div style={{display:dNTBoxIsClick?"block":"none"}} className='prod-exp-date-cont'>
      <p className='prod-exp-date-cont-text'>{dateNTimeText}</p>
<div style={{margin:"0"}} className='row prod-exp-date-cont-toggle-row'>
  <div style={{padding:"0"}} className="col-6 prod-exp-date-cont-toggle-left-col">
  <div onClick={()=>{setDNTCircleRadioBtnIsClick(current=>!current);setDateNTimeReq(current=>!current)}} className='circlee'>{dNTCircleRadioBtnIsClick?<div className='circle-color'></div>:null}</div>
  <p className='req-text'>Required</p>
  </div>
  <div style={{padding:"0"}} className="col-6 comp-phys-verf-cont-toggle-right-col">
    <p className='trigger-text'>Trigger</p>

    <div class="form-check form-switch">
  <input onClick={()=>{setDateNTimeTrigger(current=>!current);setisDNTTriggered(current=>!current)}} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaultt" checked={isDNTTriggered}/>
</div>
  </div>
</div>
      </div>
      </div>
    </div>
    </>
  )
}

export default SheetAuthoring