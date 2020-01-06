import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'


function TodoList() {

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
      <h2>David's Todo List</h2>
      <div className='todo-list'>
        {todos.map((todo, i) => <Todo key={i} index={i} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>)}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default TodoList;
