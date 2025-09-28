import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Upper Case", "success");        
    }

    const handleOnChange = (event)=>{
        settext(event.target.value);
    }  
    
    const handleLwclick = ()=>{
        let lowertext = text.toLowerCase();
        settext(lowertext);
        props.showAlert("Lower Case", "success");
        document.title = 'Textutils - Lower Case';
    }

    const handleCap = ()=>{
        //let capWord = text.charAt(0).toUpperCase() + text.slice(1);
        settext(text.charAt(0).toUpperCase() + text.slice(1));
        props.showAlert("Capitalized Case", "success");
    }

    /*const handleBold = ()=> {       
        const firstChar = text.charAt(0).toUpperCase();
        const restOfWord = text.slice(1);
        settext(<span><strong>{firstChar}</strong>{restOfWord}</span>);
    }*/

    const handleCopy = ()=> {   
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");
    }

    const handleExtraSpace = ()=> {       
        let extraSpace = text.split(/[  ]+/);
        settext(extraSpace.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleClear = ()=> { 
        settext("");
        props.showAlert("Cleared", "success");
    }

    const[text, settext] = useState('Enter Text Here')
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'#052759'}}>  
                <h1>{props.heading}</h1>    
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#052759'}}></textarea>        
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" id="myBtnupper" onClick={handleUpclick}>Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" id="myBtnlower" onClick={handleLwclick}>Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" id="myBtnCap" onClick={handleCap}>Capitalized</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" id="myBtnCopy" onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" id="myBtnExtraSpace" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" id="myBtnClear" onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container" style={{color:props.mode === 'dark'?'white':'#052759'}}>
                <h1>Your Text Summary</h1>                
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read words</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text:"Nothing to preview"}</p>
            </div>     
        </>
    )
}
