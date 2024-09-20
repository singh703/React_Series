import { useState } from 'react'
import './App.css'

function App() {
  

  function handleClick() {
    alert("I am Clicked");
  }

  function handlemouseOver() {
    alert("Paragraph ke upar mouse lekar aaye ho.")
  }


  function handleInputChange(e) {
    // console.log("Input me value change hui hai.")
    console.log("Value till now: ", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // I am writing my custom behaviour doen
    alert("Form Submit kar du kya ")
  }


  return (
    <div>
      <button onClick={() => alert("Button Click hua hai")}>
        Click Me
      </button>

    {/* // <form onSubmit={handleSubmit}>
    //   <input type="text" onChange={handleInputChange}/>
    //   <button type='submit'>Submit</button>
    // </form> */}

    {/* // <p onMouseOver={handlemouseOver} style={{border:"1px solid black"}}>
    //   I am a paragraph.
      
    // </p> */}

    {/* // <div>
    //   <button onClick={handleClick}>Click Me</button>
    // </div> */}

    {/* // <div>
    //   <button onClick={() => {alert("I got Clicked")}}>Click Me</button>
    // </div> */}

    </div>
  )
}

export default App
