import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from './context/ThemeContext'

const Nav2 = (props) => {
   
    const arr = useContext(themeDataContext);
    console.log(arr)
    return (
        <div className='flex justify-around gap-5 '>
            <h4>HOME</h4>
            <h4>COURSE</h4>
            <h4>CLASSES</h4>
            <h4>SERVICE</h4>
            <h4>{props.theme}</h4>
        </div>
        
    )
}

export default Nav2