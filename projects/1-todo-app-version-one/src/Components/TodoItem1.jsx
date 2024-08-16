function TodoItem1(){
   
   return <div className="container">
        <div className="row  todo-row">
          <div className="col-6">
            <label>Buy Milk</label>
          </div>
          <div className="col-4">
            <label>4/11/2024</label>
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-danger todo-button">Delete</button>
          </div>
        </div>
      </div>
}

export default TodoItem1;