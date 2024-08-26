import styles from './Item.module.css'

const Item = ({foodItem, active, handleButtonClicked}) => {

        return (
            <>
               <li className={ `${active && 'active'} list-group-item`}>{foodItem}
                <button className={ `${styles.buttonStyle} btn btn-info`} 
                        onClick={handleButtonClicked}>Buy</button>
                        
                </li> 
            </>
        ); 
};

export default Item;