import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostContextProvider from './store/PostStore'
import { Outlet } from 'react-router-dom'


function App() {

  return (
      <PostContextProvider>
        <div className='app-container'>
          <Sidebar></Sidebar>
          <div className='content'>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
          </div>
        </div>
      </PostContextProvider>
  )
}

export default App
