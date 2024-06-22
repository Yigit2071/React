import React, { useState } from 'react'
import TodoCreate from "./components/TodoCreate.jsx"
import TodoList from './components/TodoList.jsx'
import Todo from "./components/Todo.jsx"

function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])

  }

  const updateTodo = (newwTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newwTodo.id) {
        return todo;
      }
      return newwTodo
    })
    setTodos([...updatedTodos])
  }

  console.log(todos)


  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App