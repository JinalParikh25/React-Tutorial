import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/TodoItemContextProvider";

const TodoItem = ({item}) => {
    const {deleteItem} = useContext(TodoItemContext);

     return <div className="container">
          <div className="row  todo-row">
            <div className="col-6">
              <label name={item.name}>{item.name}</label>
            </div>
            <div className="col-4">
              <label name={item.date}>{item.date}</label>
            </div>
            <div className="col-2">
            <button type="button" 
                    className="btn btn-danger todo-button" 
                    onClick={() => deleteItem(item)}><MdDelete /></button>
            </div>
          </div>
        </div>
  }
  
  export default TodoItem;