import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
const Notes = () => {
      const context= useContext(noteContext);
    const {notes,setNotes} =context;
  return (
    <div>
      {setNotes.title}
      {notes.map((note) =>{
  return <Noteitem note={note}/>
})}
    </div>
  )
}

export default Notes
