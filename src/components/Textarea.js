import React, { useState } from 'react'


export default function Textarea(props) {

  const upperclick = () => {
    setText(text.toUpperCase())
  }
  const lowerclick = () => {
    setText(text.toLowerCase())
  }
  const copyclick = () => {
    let newtext = document.getElementById('mybox')
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  }
  const removeclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const clearclick = () => {
    let newText = "";
    setText(newText)
  }

  const handleonchnage = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  //to change text use settext-> setText(new text')
  return (
    <>
      <div className='container my-3'>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.greetings}</h1>
        <div className="mb-3 my-3 mx-5">
          <label htmlFor="mybox" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</label>
          <textarea className="form-control" id="mybox" rows="6" placeholder='Text Here...' value={text} onChange={handleonchnage} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(18 18 19 / 54%)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
          <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={upperclick}>UpperCase</button>
          <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={lowerclick}>LowerCase</button>
          <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={copyclick}>CopyText</button>
          <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={removeclick}>RemoveSpaces</button>
          <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={clearclick}>ClearText</button>
          


        </div>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary...</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words And {text.length} characters</p>
      </div>

    </>
  )
}