function Hello(){
    let no = 4561;
    
    function fullName(){
        return "Jinal Parikh"
    }

    return <h1>Message No: {no} I am your master {fullName()}</h1>
}

export default Hello;