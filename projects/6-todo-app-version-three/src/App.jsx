import AddTodo from "./Components/AddTodo"
import TodoItems from './Components/TodoItems'
import Header from "./Components/header"
import './App.css'
import { useState } from "react"
import ErrorMessage from "./Components/ErrorMessage"

function App() {
  
  
   let [todoItems , setTodoItems] = useState([]);

   const AddButton = (name,date) => {
      setTodoItems((currValue) => [...currValue,
        {
        name : name,
        date :date
      }])
   }

   const deleteButtonClicked = (item) => {
    let newarray = todoItems.filter(todoItems => todoItems != item);
    setTodoItems(newarray);
   }

  return (
    <div>
      <Header></Header>
      <AddTodo onAddButtonClicked={AddButton}></AddTodo>
      {todoItems.length === 0 && <ErrorMessage todoItems={todoItems}></ErrorMessage>}
      <TodoItems todoItems={todoItems} onDeleteItem={deleteButtonClicked}></TodoItems>
    
    </div>
  )
}

export default App
