import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
        </>
    )
}
