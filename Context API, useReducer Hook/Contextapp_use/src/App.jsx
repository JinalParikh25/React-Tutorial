import AddTodo from "./Components/AddTodo"
import TodoItems from './Components/TodoItems'
import Header from "./Components/header"
import './App.css'

import ErrorMessage from "./Components/ErrorMessage"
import TodoItemContextProvider from "./store/TodoItemContextProvider"

function App() {
  
  return (
    <div>
      <TodoItemContextProvider>
      <Header></Header>
      <AddTodo></AddTodo>
      <ErrorMessage></ErrorMessage>
      <TodoItems></TodoItems>
      </TodoItemContextProvider>
      
    </div>
  )
}

export default App
