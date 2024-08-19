
const Item = ({foodItem}) => {
        return (
            <>
               <li key={foodItem} className="list-group-item">{foodItem}</li> 
            </>

        ); 

};

export default Item;