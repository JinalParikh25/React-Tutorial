import styles from "./App.module.css"
import ButtonContainer from "./Components/ButtonContainer"
import Display from "./Components/Display"

function App() {
  

  return (
    <>
      <div className={styles.calculator}>
          <Display></Display>
          <ButtonContainer></ButtonContainer>
      </div>
    </>
  )
}

export default App
