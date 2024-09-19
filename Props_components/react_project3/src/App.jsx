import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }


  return (
    <>
     {/* Hello Jee */}
     <Button handleClick = {handleClick}
     text="click me ">
        <h1>{count}</h1>
      </Button>

     <Card name='anurag singh'>
        <h1>I am learning React library.</h1>
        <p>I am trying to be consistend in this.</p>
        <p>Will learn this library soon.</p>
     </Card>

     <Card>
      Hello Jee, Kaise ho saare this is Anurag Singh.
     </Card>
    </>
  )
}

export default App
