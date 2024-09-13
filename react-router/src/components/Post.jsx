import style from './Post.module.css'
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from 'react';
import { PostContext } from "../store/PostStore";

const Post = (prop) => {

   let {deletePost} = useContext(PostContext)
    

    return (
        <>
            <div className={`${style.postbody} card`} style={{width: "25rem"}}>
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" onClick={() => deletePost(prop.item.id)}>
                <MdDeleteOutline />
                </span>
                    <div className="card-body">
                        <h5 className="card-title">{prop.item.title}</h5>
                        <p className="card-text">{prop.item.body}</p>
                        {prop.item.tags.map((tag,index) => (
                            <a href="#" key={index} className={`btn btn-primary ${style.hasTagButton}`}>{tag}</a>
                        ))}
                        <div className={`alert alert-success `} role="alert">
                            This Post has been reacted by {prop.item.reactions.likes} people
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Post;