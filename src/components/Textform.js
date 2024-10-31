import React, {useState} from 'react'


export default function Textform(props) {
    const handleOnClickUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlertMethod('converted to uppercase', 'success');
    }
    const handleOnClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlertMethod('converted to lowercase', 'danger');
    }
    const handleOnClickCapitalize = () => {
        let newText = text.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
        setText(newText);
        props.setAlertMethod('converted to Capitalize', 'secondary');
    }
    const handleOnClickClear = () => {
        // let newText = text;
        setText('');
        props.setAlertMethod('Text is cleared', 'warning');
    }
    const handleOnClickCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setAlertMethod('text is copied to clipboard', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.setAlertMethod('Extra spaces removed', 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3 mt-3">
                <label htmlFor="myBox" className="form-label">{props.title}</label>
                <textarea className="form-control textArea" id="myBox" placeholder='Enter text here...' onChange={handleOnChange} value={text} rows="6"></textarea>
                
                <button className={`btn btn-${props.mode == false ? 'primary' : 'secondary'} mt-2 me-1`} onClick={handleOnClickUpper}>Uppercase</button>
                <button className={`btn btn-${props.mode == false ? 'primary' : 'secondary'} mt-2 me-1`} onClick={handleOnClickLower}>LowerCase</button>
                <button className={`btn btn-${props.mode == false ? 'primary' : 'secondary'} mt-2 me-1`} onClick={handleOnClickCapitalize}>Capitalize</button>
                <button className={`btn btn-${props.mode == false ? 'primary' : 'secondary'} mt-2 me-1`} onClick={handleOnClickCopy}>Copy</button>
                <button className={`btn btn-${props.mode == false ? 'primary' : 'secondary'} mt-2 me-1`} onClick={handleExtraSpaces}>Extra-Spaces</button>
                <button className={`btn btn-${props.mode == false ? 'primary' : 'secondary'} mt-2 me-1`} onClick={handleOnClickClear}>Clear</button>
                
                </div>      
            </div>
            <div className="container">
                <h1>Your text summary:</h1>
                <p>{text.split(' ').length} words and {text.length} characters. <br /> 
                Needs {0.008 * text.length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview it here.'}</p>
            </div>
        </> 
  )
}
