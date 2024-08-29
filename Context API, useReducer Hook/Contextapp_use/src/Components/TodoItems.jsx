import { useState,useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/TodoItemContextProvider";

const TodoItems = () => {
    const {todoItems} = useContext(TodoItemContext)
    return (
        <>
            {todoItems.map((item,index)=> (
            <TodoItem key={index} 
                      item={item}>
            </TodoItem> ))}        
        </>

    )
}

export default TodoItems;