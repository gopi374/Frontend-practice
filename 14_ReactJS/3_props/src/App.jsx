import { createContext } from 'react'
import Parent from './parent'

export const datacontext = createContext();

const App = ()=> {
  let x="hello, from app";

  return (
    
      <div>
          <h1>hello</h1>
        <datacontext.Provider value={x}>
          <Parent/>
        </datacontext.Provider>
      </div>
      
    

  )
}

export default App();
