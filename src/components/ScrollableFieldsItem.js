import React from 'react'
import "../css/ScrollableFieldsItem.css"
import {useDrag} from "react-dnd"

const ScrollableFieldsItem = ({item,id}) => {

 const[{isDragging},drag]=useDrag(()=>({
    type:"div",
    collect:(monitor)=>({
        isDragging:!!monitor.isDragging()
    }),
    item:{id:id},

 }))   
  return (
    <div ref={drag} id={item.id} style={isDragging?item.style:null} className={item.className}>{item.icon}<p className='faltu-text'>{item.text}</p></div>
  )
}

export default ScrollableFieldsItem