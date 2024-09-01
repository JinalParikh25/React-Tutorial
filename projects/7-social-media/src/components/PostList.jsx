import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/PostStore";

const PostList = () => {
    
    let {postList,selectedTab} = useContext(PostContext);
    
    return(
        
        <>
            {selectedTab === 'Home' && postList.length != 0 && 
            <div>
                {postList.map((postitem,index)=>
                    <Post key={index} item={postitem}></Post>
                )}
           
            </div>}
        </>
    )
}

export default PostList;