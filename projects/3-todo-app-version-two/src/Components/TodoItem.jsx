const TodoItem = ({name,date}) => {
    // let name = "Buy Milk";
    // let date = "4/11/2024"
   

     return <div className="container">
          <div className="row  todo-row">
            <div className="col-6">
              <label name={name}>{name}</label>
            </div>
            <div className="col-4">
              <label name={date}>{date}</label>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger todo-button">Delete</button>
            </div>
          </div>
        </div>
  }
  
  export default TodoItem;