import { createContext, useState } from 'react';
import './App.css'
import ChildA from './components/ChildA';

// Step1: create Context
// const UserContext = createContext();
// Step2: Wrap all the child inside the provider
// Step 3: pass value
// Step 4: Consumer ke andar jaakar consume kar lo

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Thakur"})
  const [theme, setTheme] = useState('light');
  return (

    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
      <ChildA/>
      </div>
    </ThemeContext.Provider>

    // <>
    //    <UserContext.Provider value={user}>
    //      <ChildA/>
    //    </UserContext.Provider>  
    //  </>
      
  )
}

export default App
// export {UserContext}
export {ThemeContext}
