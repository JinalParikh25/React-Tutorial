import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostContextProvider from './store/PostStore'

function App() {

  return (
      <PostContextProvider>
        <div className='app-container'>
          <Sidebar></Sidebar>
          <div className='content'>
            <Header></Header>
            <CreatePost></CreatePost>
            <PostList></PostList>
            <Footer></Footer>
          </div>
        </div>
      </PostContextProvider>
  )
}

export default App
