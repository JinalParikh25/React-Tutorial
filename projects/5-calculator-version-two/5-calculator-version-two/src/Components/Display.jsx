import styles from "./Display.module.css"


const Display = (prop) => {
   return (
        <div>
            <input className={styles.dispaly} 
                   type="text" 
                   value={prop.displayValue} ></input>
        </div>
   ) 
}

export default Display;