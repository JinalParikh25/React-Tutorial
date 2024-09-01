import { useReducer } from "react";
import { useState, createContext } from "react";

export const PostContext =  createContext({
    selectedTab : "",
    handleOnSelectTab : () => {},
    addPost : () => {},
    postList : [],
    deletePost : () => {}
});


const PostListReducer = (currentValue,action) => {
   let newItem = currentValue;

    if(action.type === "appendNewPost" ){
        newItem = [...currentValue,action.payload.post]
    }
    else if(action.type === "DeletePost"){
       newItem = currentValue.filter(item => item.postId !== action.payload.postId)
    }

    return newItem;
}   

const PostContextProvider = (prop) => {
    
    let [selectedTab, setSelectedTab] = useState("Home");

      const handleOnSelectTab = (event) =>{
        setSelectedTab(event.target.innerText)
      }


    let [postList,dispatchPostList] = useReducer(PostListReducer,[]);  

    const addPost = (post) =>{
        const newPost = {
            type : "appendNewPost",
            payload : {
                post : post
            }
        }
        dispatchPostList(newPost);
    }

    const deletePost = (postId) =>{
        const postToDelete = {
            type : "DeletePost",
            payload : {
                postId : postId
            }    
        }
        dispatchPostList(postToDelete)
    }

    return (
        <PostContext.Provider value={{selectedTab,handleOnSelectTab,addPost,postList,deletePost}}>
            {prop.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;