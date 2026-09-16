import  { useContext } from 'react'
import { datacontext } from './App'

const GrandChild = () => {
   const x =useContext(datacontext);
    return (
    
    <div>
      Grandchildren: {x}
    </div>
  )
}

export default GrandChild
