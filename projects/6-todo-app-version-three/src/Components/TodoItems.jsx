import { useState,useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoItems = (prop) => {
    
    return (
        <>
            {prop.todoItems.map((item,index)=> (
            <TodoItem key={index} 
                      item={item}
                      onClickedDelete={prop.onDeleteItem}>
            </TodoItem> ))}        
        </>

    )
}

export default TodoItems;