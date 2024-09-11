import ClockHeader from './Components/ClockHeader'
import ClockSlogan from './Components/ClockSlogan'
import CurrentTime from './Components/CurrentTime'
import './App.css'

function App() {

  return (
    <div className='container text-center'>
      <ClockHeader></ClockHeader>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
  )
}

export default App
