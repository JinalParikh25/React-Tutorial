function TodoItem2(){
   return <div className="container">
        <div className="row todo-row">
          <div className="col-6">
            <label>Go to college</label>
          </div>
          <div className="col-4">
            <label>25/12/2024</label>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger todo-button">Delete</button>
          </div>
        </div>
      </div>
}

export default TodoItem2;