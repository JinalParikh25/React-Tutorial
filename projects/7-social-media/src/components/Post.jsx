import style from './Post.module.css'
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { PostContext } from "../store/PostStore";

const Post = (prop) => {

   let {deletePost} = useContext(PostContext)
   let [{...post}] = prop.item;

    return (
        <>
            <div className={`${style.postbody} card`} style={{width: "25rem"}}>
                <button type="button"
                        onClick={() => deletePost(post.postId)}
                        className="btn btn-primary position-relative">
                    Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <MdDelete />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                <div className="card-body">
                    <h5 className="card-title">{post.postTitle}</h5>
                    <p className="card-text">{post.postContent}</p>
                    {post.hastags.map((hastag,index) => (
                        <a href="#" key={index} className={`btn btn-primary ${style.hasTagButton}`}>{hastag}</a>
                    ))}
                    <div className={`alert alert-success `} role="alert">
                        This Post has been reacted by {post.noOfReactions} people
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;