import React, {useState} from 'react';


export default function TextForm(props) {

   const [text, setText] = useState('');

   const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(text !== '')
    {props.showAlert("Converted to upper case!", "success")}
   }

   const handleLoClick = () => {
    let lo = text.toLowerCase();
    setText(lo);
    if(text !== '')
    {props.showAlert("Converted to lower case!", "success")}

   }

   const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared the text box!", "success")
   }

   const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    if(text !== '')
    {props.showAlert("Copied to clipboard!", "success")}
   }

   const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    if(text !== '')
    {props.showAlert("Removed all extra spaces!", "success")}
   }

   const handleOnchange = (event) => {
    console.log("changed");
    setText(event.target.value);
   }

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange}  rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.btncolor} mx-2`} id="buttonbox" onClick={handleUpClick}>Convert to uppercase</button>
            <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleLoClick}>Convert to lowercase</button>
            <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleClearClick}>Clear</button>
            <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleCopy}>Copy text</button>
            <button className={`btn btn-${props.btncolor} mx-2`} onClick={handleRemoveSpace}>Remove extra spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
        </div>
    </>
  )
}
