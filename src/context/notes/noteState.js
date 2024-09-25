// import React from "react";
import noteContext from "./noteContext";
const NoteState=(props)=> {
    const state={
"name":"shahid patel",
    "class": "xyz"
    }
   
return(
    <noteContext.Provider value={state}>
        {props.children}
    </noteContext.Provider>
)
}
export default NoteState;