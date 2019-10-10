import React, { useState } from 'react';
import './App.css';


function Todo({ todo, index }) {
  return(
    <div className='todo'>
      { todo.text }
    </div>
  )
}
function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Learn Hooks',
      isCompleted: false
    },
    {
      text: 'Learn Node',
      isCompleted: false
    },
    {
      text: 'Learn ES6',
      isCompleted: false
    }
  ])
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i) => <Todo key={i} index={i} todo={todo} />)}
      </div>
    </div>
  );
}

export default App;
