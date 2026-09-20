import React,{useState} from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const formHandler=(e)=>{
    const n = title;
    console.log(`form is submitted by ${n}`)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        formHandler();
      }}>
        <input type="text" placeholder='Enter your name..' value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App