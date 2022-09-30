import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }

    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#3B3B3B'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3B3B3B':'white'}} id="textBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#3B3B3B'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
        </>
    )
}
