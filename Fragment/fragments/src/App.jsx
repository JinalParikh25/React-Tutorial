import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 
 // let foodItems = ["Dal","Green vegetables","Roti","Salad","Milk","Ghee"]
    let foodItems = []
  return (
      <>
          <h1>Healthy Food</h1>
          <ErrorMessage foodItems={foodItems}></ErrorMessage>
          <FoodItems foodItems={foodItems}></FoodItems>
      </>
  );
}

export default App;
