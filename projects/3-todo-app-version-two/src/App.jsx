import AddTodo from "./Components/AddTodo"
import TodoItems from './Components/TodoItems'
import Header from "./Components/header"
import './App.css'

function App() {
  
   let todoItems = [
      {
        name : 'Buy Milk',
        date : '4/11/2024'
      },
      {
        name : 'Go to College',
        date : '9/11/2024'
      }
   ]

  return (
    <div>
      <Header></Header>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    
    </div>
  )
}

export default App
