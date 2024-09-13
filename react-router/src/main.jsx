import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import PostList, { PostLoader } from './components/PostList.jsx'
import CreatePost, { CreatePostSubmit } from './components/CreatePost.jsx'


const router = createBrowserRouter([
  { path:"/", 
    element:<App/>,
    children:[
      {path:"/", element:<PostList/>, loader:PostLoader},
      {path:"/create-post", element:<CreatePost/>, action: CreatePostSubmit}
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
