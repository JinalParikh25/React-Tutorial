import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostContextProvider from './store/PostStore'
import { useState } from 'react'


function App() {

  let [selectedTab, setSelectedTab] = useState("Home");

  const handleOnSelectTab = (event) =>{
    setSelectedTab(event.target.innerText)
  }

  return (
      <PostContextProvider>
        <div className='app-container'>
          <Sidebar selectedTab={selectedTab} handleOnSelectTab={handleOnSelectTab}></Sidebar>
          <div className='content'>
            <Header></Header>
            {selectedTab === 'Create Post' && <CreatePost></CreatePost> }
            {selectedTab === 'Home' && <PostList></PostList>}
            <Footer></Footer>
          </div>
        </div>
      </PostContextProvider>
  )
}

export default App
