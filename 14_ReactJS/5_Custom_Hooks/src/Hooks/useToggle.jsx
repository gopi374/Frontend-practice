import { useState } from "react";
const useToggle = () => {
  const [value, setValue] = useState(true);

  function handleToggle(val){
    if(typeof val !== 'boolean'){
      setValue(prev =>!prev);
    }else{
      setValue(val);
    }
  }

  return [value, handleToggle];
}

export default useToggle
