import React from 'react'

const LocalStorage = () => {
    localStorage.setItem("hello","world")
     sessionStorage.setItem("sesion","stored")
    //methods -> getitenm , setitem, removeitem , clear() , length
    const user = {
        name : "gopi",
        age:18,
        city:"indpre",
        state:"mp"
    } 
    localStorage.setItem("user",JSON.stringify(user));  // JSON to String conversion
    console.log(JSON.parse(localStorage.getItem('user')));   // String to JSON con.
    
    return (
        <div>LocalStorage</div>
    )
}

export default LocalStorage