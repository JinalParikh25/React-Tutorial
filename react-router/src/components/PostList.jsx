import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    
    // let {postList,fetching} = useContext(PostContext);
    let postList = useLoaderData();
    
    return(
        
        <>
            {postList.length === 0 && <WelcomeMessage />}
            <div>
                { postList.length !== 0 && postList.map((postitem)=>
                    <Post key={postitem.id} item={postitem}></Post>
                )}
            </div>
        </>
    )
}

export const PostLoader = () => {
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data) =>{
            return data.posts;
        });
}

export default PostList;


