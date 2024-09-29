import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);
  //   setCount(count + 1);
  // }

  // // It runs on every render
  // useEffect(() => {
  //   console.log("Mai fir se render ho gaya hu")
  // })


  // function changeColor() {
  //    btnRef.current.style.backgroundColor = "red";
  // }
  
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);


  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }


  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />

      <button onClick={resetTimer}>
        Reset
      </button>

       {/* <button 
       ref={btnRef}
       onClick={handleIncrement}>
        Increment
       </button>
       <br/>
       <br/>
       
       <button onClick={changeColor}>
        Change color 1st Button
       </button>
       <div>
        Count: {count}
       </div> */}
    </div>
  )
}

export default App
