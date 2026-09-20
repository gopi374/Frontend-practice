import { useEffect,useState } from "react";

const App = () => {
   
  const [num, setNum] = useState(0)


  useEffect(function(){
    console.log(' 1. this will run every time while rendering')
  })
  useEffect(function(){
    console.log(' 2. this will run only one time while rendering');
  },[])
  useEffect(function(){
    console.log(' 3. this will run only when dependent element called/changes');
  },[num])

  return (
    <div className="bg-green-200 w-full h-screen">
      <h1 className="p-5">Num :{num}</h1>
    <button
    className="bg-amber-200 p-2 font-bold" 
    onClick={()=>{
      setNum(num+10);
    }}>Increase</button>
    </div>
  )
}

export default App