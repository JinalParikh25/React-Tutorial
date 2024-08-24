import styles from './ButtonContainer.module.css'
import Button from './Button';

const ButtonContainer = () =>{
    return(
        <>
            <div className={styles.buttonContainer}>
              <Button></Button>
          </div>
        </>
    );

}

export default ButtonContainer;