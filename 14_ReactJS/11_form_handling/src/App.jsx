import React from 'react'

const App = () => {
  const formHandler=()=>{
    console.log("form is submitted.;")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        formHandler();
      }}>
        <input type="text" placeholder='Enter your name..' onClick={()=>{
          console.log(target.value)
        }}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App