import { useState } from "react"
import styles from "./App.module.css"
import ButtonContainer from "./Components/ButtonContainer"
import Display from "./Components/Display"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  let [clickedButton, calculateChangedValue] = useState(" ");

  const onButtonClicked = (item) => {
    const operator = ['+','-','*','/']
    if(item === '='){
      try{
        calculateChangedValue(eval(clickedButton));
      }
      catch(e){
        calculateChangedValue(e.message);
      }
    }
    else if(item.toUpperCase() === 'C'){
      calculateChangedValue('');
    }
    else{
          
        if(operator.includes(item)){
          if( clickedButton.endsWith('+') ||
              clickedButton.endsWith('-') ||
              clickedButton.endsWith('*') ||
              clickedButton.endsWith('/') )
          {
            calculateChangedValue(clickedButton);
          }
          else{
            calculateChangedValue(clickedButton + item);
          }
        }else{
            calculateChangedValue(clickedButton + item);
        }
         
    }
    
  }


  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={clickedButton}></Display>
        <ButtonContainer handleButtonClicked={onButtonClicked}></ButtonContainer>
      </div>
    </>
  )
}

export default App
