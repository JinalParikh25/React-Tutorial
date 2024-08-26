import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
 
  //let foodItems = [];

  const [ foodItems, setFoodItem ] = useState([]);

  const onItemChanged = (event) =>{
  //  console.log(event.target.value);

    let newItems = [...foodItems,event.target.value];
    
    setFoodItem(newItems);
    
  };
   
  return (
     <>
          <Container>
            <h1>Healthy Food</h1>
            <FoodInput onChangeFoodItem= {onItemChanged} ></FoodInput>
           
            <ErrorMessage foodItems={foodItems}></ErrorMessage>
            <FoodItems foodItems={foodItems}></FoodItems>
          </Container>

          <Container>
            <p> hello this is example of container</p>
          </Container>
          </>
  );
}

export default App;
