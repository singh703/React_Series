import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
// first -> side-effect functon
// second -> clean-up function
// third -> comma seprated dependency list


// variation: 1
// runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })


  // Variation: 2
  // That runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, [])

  // Variation: 3
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  // Variation: 4
  // multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count, total])
  
  function handleClick() {
    setCount(count+1);
  }
  function handleClickTotal() {
    setTotal(total+1);
  }

  // Variation: 5
  // iss baar let's add a cleanup function
  useEffect(() => {
    alert("Count is updated")
    return () => {
      alert("Count is unmount from UI")
    }
  }, [count])
  

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      Count is : {count}

      <br/>
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br/>
      Total is : {total}
    </div>
  )
}

export default App
