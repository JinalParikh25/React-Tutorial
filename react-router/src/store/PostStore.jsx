import { useEffect } from "react";
import { useReducer } from "react";
import { useState, createContext } from "react";

export const PostContext =  createContext({
    handleOnSelectTab : () => {},
    addPost : () => {},
    postList : [],
    deletePost : () => {},
    fetching : true
});


const PostListReducer = (currentValue,action) => {
   let newItem = currentValue;

    if(action.type === "appendNewPost" ){
        newItem = [action.payload.post,...currentValue]
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        newItem = action.payload.posts;
      }
    else if(action.type === "DeletePost"){
       newItem = currentValue.filter(item => item.id != action.payload.postId)
    }

    return newItem;
}   

const PostContextProvider = (prop) => {
    let [fetching,setFetching] = useState(true);
    
    useEffect(() => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((obj) => {
            addInitialPosts(obj.posts);
            setFetching(false);
        });
    }, []);

    
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

    const addInitialPosts = (posts) => {
        dispatchPostList({
          type: "ADD_INITIAL_POSTS",
          payload: {
            posts,
          },
        });
      };

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
        <PostContext.Provider value={{addPost,postList,deletePost,fetching}}>
            {prop.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;