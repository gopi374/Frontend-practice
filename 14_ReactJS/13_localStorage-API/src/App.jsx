import axios from "axios"
import { useState } from "react";
const App = () => {

  // async function data(){
  //   const d = await fetch('https://jsonplaceholder.typicode.com/users/')
  //   console.log(d.id)
  // }

  const [data,  setData] = useState([]);
  const getData = async()=>{
    const res = await axios.get(`https://picsum.photos/v2/list`);
    setData(res.data)
    console.log(res.data['url'])
  }


  return (
    <div>
      <button onClick={getData}>
       GET Data
      </button>
      
        {data.map(function(idx){
          return <h1 key={idx.id}>hello{idx.id}</h1>
        })}
      
    </div>
  )
}

export default App