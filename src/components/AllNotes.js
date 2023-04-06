import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeNote, updateNote } from '../redux/action';
// import { useNavigate } from 'react-router-dom';
import './notes.css'
export default function AllNotes() {

  const notes = useSelector((state) => state.notes)
  console.log(notes)
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  let [newtitle,setNewtitle] = useState('')
  let [newcontent,setNewcontent] = useState('')
  let [title,setTitle]= useState('')
  let [content,setContent] = useState('')
  let [index,setIndex] = useState()
  function update(id,title,content) {
    // document.querySelector('.ot').style.display="none"
    // document.querySelector('.oc').style.display="none"
    // document.querySelector('.tedit').style.display="block"
    // document.querySelector('.cedit').style.display="block"
    // document.querySelector('.epro').style.display="flex"
    // document.querySelector('.epro').classList.toggle('.fl')
    // document.querySelector('.card').innerHTML=
    // `
    // <input type="text" defaultValue={data.title} onChange = {(e)=> setNewtitle(e.target.value)} ></input>
    //     <input type="text" defaultValue={data.content} onChange = {(e)=> setNewcontent(e.target.value)} ></input>
    // `
    
    document.querySelector('.notes').style.display="none"
    document.querySelector('.pop').style.display="flex"
    

  }
  function savedit(id,title,content) {
      dispatch(updateNote(id,title,content,newtitle,newcontent))
    alert("done updating");
    document.querySelector('.epro').style.display="none"
  }
  return (
    <>
    <div className=''>
      <h1 className="text-center text-warning title mt-5">ALL NOTES</h1>
      <div className='text-center'>
       <Link to="/" className=''>
          <button className='btn btn-outline-info'><i className="fa-solid fa-arrow-left"></i>  Go Home</button>
        </Link>
     </div>
     <div className='notes mt-2'>
      {
        notes.map((note, index) => {
          return (
            <div key={index} className={index}>
              <div className="card " style={{width: "18rem", margin:'2rem'}}>
                <div className="card-body d-flex">
                  
                    <div>
                      <h5 className="card-title ot">{note.title}</h5>
                      {/* <input type="text" className='tedit' defaultValue={note.title} onChange = {(e)=> setNewtitle(e.target.value)} ></input> */}
                      <hr />
                      {/* <input type="text" className='cedit' defaultValue={note.content} onChange = {(e)=> setNewcontent(e.target.value)} ></input> */}
                                        <p className="card-text oc">{note.content}</p>
                    </div>
                    
                  {/* <hr /> */}
                  <div className='edits'>
                    <button className="btn btn-danger d-flex" onClick={()=> dispatch(removeNote(index))}>
                      <lord-icon
                        src="https://cdn.lordicon.com/jmkrnisz.json"
                        trigger="hover"
                        className='lic'
                        style={{width:"22px",marginTop:"-4px"}} >
                      </lord-icon>
                    </button>
                    {/* <Link to={`/edit/${index+1}`} state={{data:note,id:index}} key={index}> */}
                        <button className='btn btn-success' onClick={()=>update(index,note.title,note.content)}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    {/* </Link> */}
                  </div>
                </div>
                {/* <div className='epro'>
                      <button className='btn btn-success' onClick={()=>savedit(index,note.title,note.content)}>save</button>
                      <button className='btn btn-secondary'>cancel</button>
                </div> */}
              </div>
            </div>

          )
        })
      }

     </div>
     <div className="pop">
        <input type="text" className='tedit' defaultValue={title} onChange = {(e)=> setNewtitle(e.target.value)} ></input>
        <input type="text" className='cedit' defaultValue={content} onChange = {(e)=> setNewcontent(e.target.value)} ></input>
            <div className='epro'>
                      <button className='btn btn-success' onClick={()=>savedit(index,title,content)}>save</button>
                      <button className='btn btn-secondary'>cancel</button>
            </div>
     </div>
    </div>
    </>
  
  )
}
