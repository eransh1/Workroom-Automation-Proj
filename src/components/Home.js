import React,{useState} from 'react'
import "../css/Home.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Board from './Board'
import NewSheetModal from './NewSheetModal'
import SheetDetailModal from './SheetDetailModal'
import SheetAuthoring from './SheetAuthoring'

const Home = () => {
const[authorNewSheetIsClicked,setAuthorNewSheetIsClicked]=useState(false)
const[afsClick,setAfsClick]=useState()
const[cftClick,setCftClick]=useState(false) 
const[selectAsset,setSelectAsset]=useState("Select asset")
const[selectSubAsset,setSelectSubAsset]=useState("Select sub-asset")
const[sheetName,setSheetName]=useState("")
const[sheetDesc,setSheetDesc]=useState("")
const[startAuthoringBtnClick,setStartAuthoringBtnClick]=useState(false)
const[displayCont,setDisplayCont]=useState(true)
const[fieldTitleText,setFieldTitleText]=useState("Field Title ")
const[checkListItem1,setCheckListItem1]=useState("Check List Item 1")
const[checkListItem2,setCheckListItem2]=useState("Check List Item 2")
const[dateNTimeText,setDateNTimeText]=useState("Field Title")

  const[id,setId]=useState(4)
  return (
    <>
    <section id='home'>
      <Navbar />
      {displayCont?<div className='display-cont'>
      <Sidebar id={id} setId={setId} />
      {id===4?<Board setId={setId} selectAsset={selectAsset} setSelectAsset={setSelectAsset} selectSubAsset={selectSubAsset} setSelectSubAsset={setSelectSubAsset} setAuthorNewSheetIsClicked={setAuthorNewSheetIsClicked} />:null}
      </div>:null}
      {authorNewSheetIsClicked?<NewSheetModal setAfsClick={setAfsClick} setCftClick={setCftClick} setAuthorNewSheetIsClicked={setAuthorNewSheetIsClicked} setSelectAsset={setSelectAsset} setSelectSubAsset={setSelectSubAsset}  />:null}
{afsClick?<SheetDetailModal setDisplayCont={setDisplayCont} setAfsClick={setAfsClick} setStartAuthoringBtnClick={setStartAuthoringBtnClick} selectAsset={selectAsset} setSelectAsset={setSelectAsset} selectSubAsset={selectSubAsset} setSelectSubAsset={setSelectSubAsset} sheetName={sheetName} setSheetName={setSheetName} sheetDesc={sheetDesc} setSheetDesc={setSheetDesc} />:null}
{startAuthoringBtnClick?<SheetAuthoring dateNTimeText={dateNTimeText} setDateNTimeText={setDateNTimeText} setCheckListItem2={setCheckListItem2} checkListItem2={checkListItem2} checkListItem1={checkListItem1} setCheckListItem1={setCheckListItem1} fieldTitleText={fieldTitleText} setFieldTitleText={setFieldTitleText} />:null}

      </section>
    </>
  )
}

export default Home