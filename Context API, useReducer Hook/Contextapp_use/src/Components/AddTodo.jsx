import { useContext, useRef } from "react";
import { MdAddToQueue } from "react-icons/md";
import { TodoItemContext } from "../store/TodoItemContextProvider";

function AddTodo({onAddButtonClicked}){

    const {addItem} = useContext(TodoItemContext);

    let todoText = useRef();
    let todoDate = useRef();

    const onAddButton = (event) => { 
        event.preventDefault();
        addItem(todoText.current.value,todoDate.current.value);
        todoText.current.value = "";
        todoDate.current.value = "";
    }

    return <div className="container text-center">
                <form className="row todo-row" 
                      onSubmit={onAddButton}>
                    <div className="col-6">
                        <input type="text" 
                               id='txt'
                               ref={todoText}
                               placeholder="Enter Todo here">
                        </input>
                    </div>
                    <div className="col-4">
                        <input type="date"
                               ref={todoDate}
                               id='date'>
                        </input>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success todo-button"
                                ><MdAddToQueue /></button>
                    </div>
                </form>
            </div>
}

export default AddTodo;