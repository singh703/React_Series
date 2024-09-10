import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './Components/UserCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      

      {/* <h1>Hello! Anurag Ji </h1> */}

      <UserCard name="X" desc="My name is X description"/>
      <UserCard name="Y" desc="My name is Y description"/>
      <UserCard name="Z" desc="My name is Z description"/>
    </div>

  )
}

export default App
