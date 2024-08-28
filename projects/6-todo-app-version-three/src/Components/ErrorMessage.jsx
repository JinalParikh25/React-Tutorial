const ErrorMessage = ({todoItems}) => {

    return (
        <>
            <div className="container">
                <div className="row  todo-row">
                    <div className="col-6">
                        <h1>No item in List</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorMessage;