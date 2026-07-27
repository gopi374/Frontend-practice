import { useState } from 'react';
import './App.css';

function App() {
  // let count=0;
  let [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button
          onClick={() => {
            // count++;
            setCount(count + 1);
            console.log(count);
          }}
          className="inc 1/4"
        >
          Increase
        </button>
        {count}
        <button
          onClick={() => {
            // count++;
            setCount(count - 1);
            console.log(count);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
