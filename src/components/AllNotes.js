import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { removeNote, updateNote } from '../redux/action';
import './notes.css'
export default function AllNotes() {
  const titleref= useRef(null)
  const contref = useRef(null)
  let [id,setId] = useState()
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch();
  let [newtitle,setNewtitle] = useState('')
  let [newcontent,setNewcontent] = useState('')
  function update(id,title,content) {
    titleref.current.value=title
    contref.current.value=content
    setId(id)
    setNewtitle(title)
    setNewcontent(content)
    document.querySelector('.notes').style.opacity="0.5"
    document.querySelector('.pop').style.display="block"

  }
  function saveit(id,title,content) {
    dispatch(updateNote(id,title,content,newtitle,newcontent))
    document.querySelector('.notes').style.opacity="1"
    document.querySelector('.pop').style.display="none"
  }
  function cancel() {
    document.querySelector('.notes').style.opacity="1"
    document.querySelector('.pop').style.display="none"
  }
  function removenote(index) {
    dispatch(removeNote(index))
    toast.success('deleted a note', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <>
    <div className=''>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <h1 className="text-center text-warning title mt-5">ALL NOTES</h1>
      <div className='text-center'>
       <Link to="/" className=''>
          <button className='btn btn-outline-info'><i className="fa-solid fa-arrow-left"></i>  Go Home</button>
        </Link>
     </div>
     {
      notes.length===0?<h1 className='text-center text-danger mt-2'>No Notes Found</h1>:""
     }
     <div className='notes mt-2 d-flex flex-wrap'>
      {
           notes.map((note, index) => {
            return (
              <div key={index} className={index}>
                <div className="card d-flex flex-wrap" style={{width: "18rem",margin:'2rem'}}>
                  <div className="card-body ">
                      <div className='' style={{width: "15rem",}}>
                        <h5 className="card-title text-success ot">{note.title}</h5>
                        <hr />
                        <p className="card-text oc">{note.content}</p>
                      </div>
                  </div>
                  <div className='edits'>
                      <button className="btn btn-outline-danger"  onClick={()=>removenote(index)}>Delete
                        <i className="ms-2 fa-solid fa-trash"></i>
                      </button>
                          <button className='btn btn-outline-success' onClick={()=>update(index,note.title,note.content)}>Edit  
                             <i className="fa-solid ms-2 fa-pen-to-square"></i>
                          </button>
                    </div>
                </div>
              </div>
            )
          }) 
      }
     </div>
     <div className="pop ">
        <div className='poptitle'>
          <input type="text" className='tedit text-warning-emphasis fs-3' id="tedit" ref={titleref} onChange = {(e)=> setNewtitle(e.target.value)} placeholder="Title" autoComplete="off" ></input>
        </div>
        <hr />
        <div className='popcontent'>
          <textarea className=' fs-5 text-warning-emphasis  pb-2' type='text' ref={contref} placeholder='Content' onChange = {(e)=> setNewcontent(e.target.value)} required style={{border:"none",resize:"none",outline:"none",width:"100%",height:"10rem"}} autoComplete="off" ></textarea>
        </div>
            <div className='epro mb-2'>
                  <button className='btn btn-success' onClick={()=>saveit(id,titleref.current.value,contref.current.value)}>save</button>
                  <button className='btn ms-3 btn-secondary' onClick={()=>cancel()}>cancel</button>
            </div>
      </div>
    </div>
    </>
  )
}
