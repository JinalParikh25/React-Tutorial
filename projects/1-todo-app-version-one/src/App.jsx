import AddTodo from "./Components/AddTodo"
import TodoItem1 from "./Components/TodoItem1"
import TodoItem2 from "./Components/TodoItem2"
import Header from "./Components/header"
import './App.css'

function App() {
  
  return (
    <div>
      <Header></Header>
      <AddTodo></AddTodo>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </div>
  )
}

export default App
