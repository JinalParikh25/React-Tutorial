import { useContext } from 'react';
import style from './WelcomeMessage.module.css';
import { PostContext } from '../store/PostStore';

const WelcomeMessage = () => {

    let {addPost} = useContext(PostContext);

    const FetchPosts = () => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(obj => addPost(obj.posts));
    }

    return (
        <>
            <center className={style.welcome_body}>
                <h1>There are no posts</h1>
                <button type="button" 
                        onClick={FetchPosts}
                        className="btn btn-primary">Get Posts From Server</button>
            </center>
        </>
    )
}

export default WelcomeMessage