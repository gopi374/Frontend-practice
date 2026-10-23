import { useContext } from 'react'
import Nav2 from './Nav2'
import { themeDataContext } from './context/ThemeContext'

const Navbar = (props) => {
   const data =  useContext(themeDataContext);
   console.log(data)
  return (
    <div className='font-bold flex justify-between p-5'>
        <h1>{data[0].name.toUpperCase()}</h1>
        <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar