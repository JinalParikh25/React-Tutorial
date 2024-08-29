import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContextProvider";

const ErrorMessage = () => {
    const {todoItems} = useContext(TodoItemContext);

    return (
        <>
            <div className="container">
                <div className="row  todo-row">
                    <div className="col-6">
                        {todoItems.length === 0 && <h1>No item in List</h1>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorMessage;