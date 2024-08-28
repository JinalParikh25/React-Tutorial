import { MdAddToQueue } from "react-icons/md";

function AddTodo({onAddButtonClicked}){

    const onAddButton = (txt,date) => {
        onAddButtonClicked(txt.value,date.value);
        txt.value = '';
        date.value = '';
    }

    return <div className="container text-center">
                <div className="row todo-row">
                    <div className="col-6">
                        <input type="text" id='txt' placeholder="Enter Todo here"></input>
                    </div>
                    <div className="col-4">
                        <input type="date" id='date'></input>
                    </div>
                    <div className="col-2">
                        <button type="button" 
                                className="btn btn-success todo-button"
                                onClick={() => onAddButton(txt,date)}><MdAddToQueue /></button>
                    </div>
                </div>
            </div>
}

export default AddTodo;