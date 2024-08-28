import styles from './ButtonContainer.module.css'


const ButtonContainer = (prop) =>{

    let buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
 
    return(
        <>
                <div className={styles.buttonContainer}>
                    {buttonName.map((item,index) => (
                         <button key={index} className={styles.button}
                         onClick={() => prop.handleButtonClicked(item)}
                  >{item}</button>

                    ))}
               
                </div>
        </>
    );

}

export default ButtonContainer;