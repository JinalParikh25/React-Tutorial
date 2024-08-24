import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
    return (
        <>
            {todoItems.map((item,index)=> (
            <TodoItem key={index} name={item.name} date={item.date}></TodoItem>
        ))}
        </>

    )
}

export default TodoItems;