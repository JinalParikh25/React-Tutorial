function Random(){
    let random_No = Math.random() * 100;

    return <h1 style={{'background-color':'#776691'}}>Random number is : {Math.round(random_No)}</h1>
}

export default Random;