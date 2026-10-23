import { useState } from 'react'
import axios from "axios";

const App = () => {

  const BASE_URL = 'https://picsum.photos/v2/list?page=2&limit=25';

  const [userData, setUserData] = useState([]);

  const getdata = async()=>{

    console.log('data will come')

    const res = await axios.get(BASE_URL);
  
    setUserData(res.data);

    console.log(res.data)
  }

  let printUserData = "No images";
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div>
      <div key={idx} className='rounded-2xl flex gap-20 m-2 w-60 h-50 bg-black'>
        <img src={elem.download_url}/>
      </div>
        <h1>{elem.author}</h1>
        </div>
    })
  }

  return (
    <div className='bg-red-200'>
      <button className='bg-green-200 p-3 m-5 font-bold active:scale-95' onClick={getdata} onDoubleClick={()=>{
        getdata();
      }}>Get data</button>
      
      <div className='flex flex-wrap'>
        {printUserData}
      </div>
    </div>
  )
}

export default App