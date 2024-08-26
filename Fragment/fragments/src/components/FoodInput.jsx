import style from './FoodInput.module.css'

const FoodInput = ({onChangeFoodItem}) => {

    return (
        <>
            <input type="text" 
                   className={ `${style.inputStyle} input-group` }
                   onChange={onChangeFoodItem} ></input>
        </>
    )

}

export default FoodInput;