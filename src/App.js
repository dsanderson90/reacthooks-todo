import React, { useState } from 'react';
import './App.css';

function TodoForm( {addTodo} ) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue(' ')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        placeholder='Add Todo...'
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return(
    <div
      className='todo'
      style={{textDecoration: todo.isCompleted ? 'line-through': ''}}>
      { todo.text }
      <div>
        <button
          onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button
          onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
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

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i) => <Todo key={i} index={i} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>)}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
