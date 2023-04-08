import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNote } from '../redux/action';


export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  const dispatch = useDispatch();
  function handleSubmission(e){
    e.preventDefault();
    dispatch(addNote(title, content))
    setTitle('')
    setContent('')
    toast.success('added a new note', {
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
    <div className=''>
      <div className='container'>
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

          <h1 className="text-center text-warning title mt-5">NOTE MAKER</h1>
          <div className='mt-2 text-center'>
            <Link to="/notes">
              <button className='btn btn-outline-info'>
                All Notes <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div className='cntdiv  mt-5'  >
            <form onSubmit={handleSubmission} autoComplete="off" className='pt-3' >
                    <div><input className='text-warning-emphasis fs-3 titleinp' type='text' name='title' value={title} placeholder='Title' onChange = {(e)=> setTitle(e.target.value)} required/></div>
                    <hr />
                    <div>
                      <textarea className=' fs-4 text-warning-emphasis cntinp pb-2' type='text' name='content' value={content} placeholder='Take a note' onChange = {(e)=> setContent(e.target.value)} required style={{border:"none",width:"100%",height:"15rem",resize:"none",outline:"none"}}></textarea>
                    </div>
                    <div className='text-center pb-2'><button className="btn btn-success p-2">Add note</button></div>
            </form>
          </div>
      </div>
    </div>
  )
}
