import { useContext } from "react";
import Navbar from "./Navbar"
import { useState } from "react";
import { themeDataContext } from "./context/ThemeContext";

const App = (props) => {

  const data = useContext(themeDataContext);
  const [theme, setTheme] = useState('Light');
  return (
    <div className='bg-green-200'>
      <Navbar theme={theme}/>

      <div className="flex gap-3">
        {data.map((elem,idx)=>{
          return <div><div key={idx} className="">{elem.name}-{elem.id}</div>
          <img
                src={elem.pic}
                alt={elem.name}
                className="w-16 h-16 object-cover"
              /></div>
        })}
      </div>
    </div>
    
  )
}

export default App