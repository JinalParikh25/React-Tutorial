import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../store/PostStore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    
    let {postList,selectedTab,addPost} = useContext(PostContext);
    let [fetching,setFetching] = useState(true);
    
    useEffect(() => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((obj) => {
            addPost(obj.posts);
            setFetching(false);
        });
    }, []);

    return(
        
        <>
            {fetching  && <LoadingSpinner/>}
            {!fetching && selectedTab === 'Home' && postList.length === 0 && <WelcomeMessage />}
            <div>
                {!fetching && postList.map((postitem)=>
                    <Post key={postitem.id} item={postitem}></Post>
                )}
           
            </div>
        </>
    )
}

export default PostList;