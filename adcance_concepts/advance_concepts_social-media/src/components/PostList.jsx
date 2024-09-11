import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/PostStore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    
    let {postList,selectedTab} = useContext(PostContext);
    
    return(
        
        <>
            {selectedTab === 'Home' && postList.length === 0 && <WelcomeMessage />}
            <div>
                {postList.map((postitem)=>
                    <Post key={postitem.id} item={postitem}></Post>
                )}
           
            </div>
        </>
    )
}

export default PostList;