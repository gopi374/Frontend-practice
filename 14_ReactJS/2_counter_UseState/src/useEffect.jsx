import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // let count=0;
  let [todos, settodo] = useState([]);

  console.log("App rendered")

  //useEffect(fn,[]);
  useEffect(function () {
    console.log("rendered UseEffect !")
  }, []);

  let url = "https://jsonplaceholder.typicode.com/todos";


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        settodo(data),
          console.log(data)
      })
  }, [])

  return (
    <>
      <div>
        <button>increase</button>
        <ul>{todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
