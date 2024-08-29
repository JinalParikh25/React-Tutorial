import AddTodo from "./Components/AddTodo"
import TodoItems from './Components/TodoItems'
import Header from "./Components/header"
import './App.css'
import { useState } from "react"
import ErrorMessage from "./Components/ErrorMessage"
import { TodoItemContext } from "./store/TodoItemContext"

function App() {
  
  
   let [todoItems , setTodoItems] = useState([]);

   const addItem = (name,date) => {
      setTodoItems((currValue) => [...currValue,
        {
        name : name,
        date :date
      }])
   }

   const deleteItem = (item) => {
    let newarray = todoItems.filter(todoItems => todoItems != item);
    setTodoItems(newarray);
   }

  return (
    <div>
      <TodoItemContext.Provider value={{todoItems,addItem,deleteItem}}>
      <Header></Header>
      <AddTodo></AddTodo>
      <ErrorMessage></ErrorMessage>
      <TodoItems></TodoItems>
      </TodoItemContext.Provider>
    
    </div>
  )
}

export default App
