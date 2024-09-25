import React, {useState} from 'react'

export default function Today(props) {
const handleUpClick = ()=>{
  // console.log("uppercase was clicked"+text);
 let newText= text.toUpperCase();
  setText(newText)
}
const handleLoClick = ()=>{
  // console.log("uppercase was clicked"+text);
 let newText= text.toLowerCase();
  setText(newText)
}
const handleClearClick = ()=>{
 let newText= '';
  setText(newText)
}
const handleCopy = ()=>{
 var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces = ()=>{
 let newText= text.split(/[ ]+/);
  setText(newText.join(" "))
}
const handleOnChange = (event)=>{
  // console.log("On change");
    setText(event.target.value);

}
    const [text, setText] = useState('use her');
   
  
  return (

    <>
    
        <div className="row-fluid float-start w-100 ">
            <h1>{props.heading}</h1>
  <textarea className="form-control"  id="myBox" onChange={handleOnChange}   ></textarea>
    </div>
    <button className="btn btn-dark mx-2" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
    <button className="btn btn-dark mx-2" onClick={handleClearClick}>convert to blank</button>
    <button className="btn btn-primary mx-2"  onClick={handleCopy}>convert to copy</button>
    <button className="btn btn-dark mx-2" onClick={handleExtraSpaces}>convert to split</button>

    
    <div className="container">
      <h2>your text summary</h2>
      <p>{text.split(" ").length} word and {text.length} charactres</p>
      <p>{0.008*text.split(" ").length} minute read</p>
<h2>preview</h2>
<p>{text}</p>
    </div>
</>  
  )
}
