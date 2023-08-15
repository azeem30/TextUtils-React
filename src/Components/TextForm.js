import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const changeUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
  }
  const changeLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'success');
  }
  const clearText = () => {
    let newText = "";
    setText(newText);
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
        <div className='container my-2' style={{color:  props.mode==='light'?'black':'white'}}>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
            <textarea id="myBox" value={text} class="form-control" onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color:  props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button onClick={changeUpperCase} className="btn btn-primary">Convert to Uppercase</button>
        <button onClick={changeLowerCase} className="btn btn-primary mx-2">Convert to Lowercase</button>
        <button onClick={clearText} className="btn btn-primary">Clear Text</button>
        </div>
        <div className="container my-2" style={{color:  props.mode==='light'?'black':'white'}}  >
            <h1>Summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes</p>
        </div>
        <div className="container my-2" style={{color:  props.mode==='light'?'black':'white'}}>
            <h1>Preview</h1>
            <p>{text.length>0? text: 'Enter something in the textbox above to preview it here'}</p>
        </div>
    </>
  )
}
