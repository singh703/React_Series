import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count+1);
  // }

  // const handleClick = useCallback(() => {
  //   setCount(count+1);
  // }, [count]);

  // useCallback(
  //   () => {
  //     first
  //   },
  //   [second],
  // )
  

  return (
    <div>
      <ExpensiveComponent />
    </div>
    // <div>
    //    <div>
    //     Count: {count}
    //    </div>

    //    <br />
    //    <div onClick={handleClick}>
    //     <button>Increment</button>
    //    </div>

    //    <br />
    //    <div>
    //     <ChildComponents buttonName="Click Me" handleClick={handleClick}/>
    //    </div>
    // </div>
  )
}

export default App
