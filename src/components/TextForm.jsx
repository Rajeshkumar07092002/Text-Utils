
import React, {useState} from 'react';

function TextForm(props) {

    const [text,setText]=useState("");

    function handleChange(event){
        let newText=event.target.value;
        setText(newText);
     }
    function handleUpClick() {
        var str=text.toUpperCase();
        setText(str);
        props.showAlert("Converted to UpperCase","success");
    }
    function handleLowClick() {
        var str=text.toLowerCase();
        setText(str);
        props.showAlert("Converted to LowerCase","success");
    } 
    function handleClear() {
        var str="";
        setText(str);
        props.showAlert("Text cleared","success");
    } 

    const handleCopy = () => {
        var text=document.getElementById("text");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();   //to deselect the text which got selected after being copied.
        props.showAlert("Text copied to Clipboard","success");
    }
     
    const handleExtraSpace = () =>{
        let newText=text.split(/[ ]+/);   //regex
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    return(
      <>
       <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}} >
        <div className="mb-3">
        <label htmlFor="myText" className="form-label"><h1>{props.heading}</h1></label>
        <textarea onChange={handleChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}} value={text} className="form-control" id="text" rows="4"></textarea>
        <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary my-2">convert to Uppercase</button>
        <button disabled={text.length===0} onClick={handleLowClick} className="btn btn-primary mx-2 my-2">convert to Lowercase</button>  
        <button disabled={text.length===0} onClick={handleClear} className="btn btn-primary mx-2 my-2">Clear</button>  
        <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy</button>  
        <button disabled={text.length===0} onClick={handleExtraSpace} className="btn btn-primary mx-2 my-2">remove Extra Space</button>  
        </div>
       </div>
  {/*  disabled is to disable button when length of text is 0; */}
        <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+g/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters and {text.split('.').filter((element)=>{return element.length!==0}).length} sentences</p> 
            <p>{0.008*(text.split(' ').filter((element)=>{return element.length!==0})).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
      </>
    )
}

export default TextForm;