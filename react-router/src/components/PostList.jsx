import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/PostStore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    
    let {postList,fetching} = useContext(PostContext);

    
    return(
        
        <>
            {fetching && <LoadingSpinner/>}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            <div>
                {!fetching && postList.length !== 0 && postList.map((postitem)=>
                    <Post key={postitem.id} item={postitem}></Post>
                )}
            </div>
        </>
    )
}

export default PostList;