const ErrorMessage = (props) => {
    
    return (
        <>
            {props.foodItems && props.foodItems.length === 0 && <h1>I am still hungry</h1> }
        </>
    );
};

export default ErrorMessage;