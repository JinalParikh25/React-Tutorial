import { useState } from "react";
import Item from "./item";

const FoodItems = ({foodItems}) =>{

    let [ activeItems, setActiveItem] = useState([]);

    const buttonClickedEvent = (foodItem,event) => {
        console.log(event.type);
            if(event.type === "click"){
                let NewItem = [...activeItems,foodItem];
                setActiveItem(NewItem);
            }
            

            console.log(` ${foodItem} is clicked `)
     }

    return (
        <>
            <ul className="list-group">
                {foodItems.map((item) => (
                   <Item key={item} 
                         foodItem={item} 
                         active = {activeItems.includes(item)}
                         handleButtonClicked = { (event) => buttonClickedEvent(item,event)}
                    >
                    </Item>
                ))}
            </ul>
        
        </>
    );


}

export default FoodItems;