import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  let zeroLength = text.length === 0;
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
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"><h1 className='mb-2'>{props.heading}</h1></label>
            <textarea id="myBox" value={text} class="form-control" onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color:  props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={zeroLength} onClick={changeUpperCase} className="btn btn-primary my-1">Convert to Uppercase</button>
        <button disabled={zeroLength} onClick={changeLowerCase} className="btn btn-primary mx-2 my-1">Convert to Lowercase</button>
        <button disabled={zeroLength} onClick={clearText} className="btn btn-primary my-2">Clear Text</button>
        </div>
        <div className="container my-2" style={{color:  props.mode==='light'?'black':'white'}}  >
            <h1>Summary</h1>
            <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes</p>
        </div>
        <div className="container my-2" style={{color:  props.mode==='light'?'black':'white'}}>
            <h1>Preview</h1>
            <p>{text.length>0? text: 'Nothing to preview'}</p>
        </div>
    </>
  )
}
