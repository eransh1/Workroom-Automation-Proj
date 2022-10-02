import React from 'react'
import "../css/Sidebar.css"
import HomeIcon from '../images/HomeIcon'
import EditCrossIcon from "../images/EditCrossIcon"
import RefreshIcon from "../images/RefreshIcon"
import ToDoListIcon from "../images/ToDoListIcon"

const Sidebar = ({id,setId}) => {
  
  return (
    <section id='sidebar'>
<div onClick={()=>{setId(1)}} className={'icon-box '+(id===1?"activeee":"")}><HomeIcon fill={id===1?"white":"#7D7676"} />
<div className={id===1?"active-bar":'normal-bar'}></div></div>
<hr className='line'/>
<div onClick={()=>{setId(2)}} style={{marginTop:"0.5rem"}} className={'icon-box '+(id===2?"activeee":"")}><RefreshIcon fill={id===2?"white":"#7D7676"} />
<div className={id===2?"active-bar":'normal-bar'}></div></div>
<div onClick={()=>{setId(3)}} className={'icon-box '+(id===3?"activeee":"")}><ToDoListIcon fill={id===3?"white":"#7D7676"} />
<div className={id===3?"active-bar":'normal-bar'}></div></div>
<div onClick={()=>{setId(4)}} className={'icon-box '+(id===4?"activeee":"")}><EditCrossIcon fill={id===4?"white":"#7D7676"} />
<div className={id===4?"active-bar":'normal-bar'}></div></div>
    </section>
  )
}

export default Sidebar