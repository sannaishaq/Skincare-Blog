import React, { useState} from 'react'

function Form() {

const [textInput, setTextInput] = useState('')

const handleChange = (e) =>{
setTextInput(e.target.value)
}


const handleSubmit = (e) =>{
e.preventDefault()
setTextInput("")
}

  return (
    <div>
    <h1>Form</h1>
    <label>Enter value : </label>
    <form onSubmit={handleSubmit}></form>
    <input 
      className='input'
      size= '200px'
      type="textarea" 
      name="textValue"
      onChange={handleChange}
      value={textInput}
    />
    <button type="submit">Submit</button>
    </div>

  )
}

export default Form