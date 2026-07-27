/* eslint-disable react-refresh/only-export-components */
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'

let todos = [
  { name: 'Swim', des: ' is good for health' },
  { name: 'Swim', des: ' is good for health' },
];

function App({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.name}:{todo.des}
        </li>
      ))}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <App todos={todos} />
);
