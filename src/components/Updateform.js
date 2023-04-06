import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { updateNote } from '../redux/action';
// import './notes.css'
export default function Updateform() {
    const location = useLocation();
  const data = location.state.data
//   console.log("data:",location)
  const id = location.state.id
  let [newtitle,setNewtitle] = useState('')
  let [newcontent,setNewcontent] = useState('')
  const dispatch = useDispatch();
  function edit() {
    if((newtitle !== "" || newcontent !== "") && (newtitle!==data.title || newcontent!==data.content)) {
        dispatch(updateNote(id,data.title,data.content,newtitle,newcontent))
    } 
    
  }
  return (
    <div>
        <input type="text" defaultValue={data.title} onChange = {(e)=> setNewtitle(e.target.value)} ></input>
        <input type="text" defaultValue={data.content} onChange = {(e)=> setNewcontent(e.target.value)} ></input>
        
        <Link to="/">
            <button onClick={edit}>Done</button>
        </Link>
    </div>
  )
}
