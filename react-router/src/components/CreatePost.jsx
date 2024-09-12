import { useContext } from 'react';
import style from './CreatePost.module.css';
import { PostContext } from '../store/PostStore';
import { useRef } from 'react';

const CreatePost = () => {

   const { addPost} = useContext(PostContext)


    let userId = useRef();
    let postTitle = useRef();
    let postContent = useRef();
    let noOfReactions = useRef();
    let hastag = useRef();

   const onFormSubmit = (event) => {
        event.preventDefault();
        
        userId.current.value = " ",
        postTitle.current.value = " ",
        postContent.current.value = " ",
        noOfReactions.current.value = " ",
        hastag.current.value = " ",

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: userId.current.value,
              title : postTitle.current.value,
              body : postContent.current.value,
              reactions : noOfReactions.current.value,
              tags : hastag.current.value.split(" ")
            })
          })
          .then(res => res.json())
          .then(post => addPost(post));
      }

    return (
        <>
            { 
                <form className={style.form}
                      onSubmit={onFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userId" 
                               className="form-label">
                               Enter your user id here
                        </label>
                        <input type="text" 
                               className="form-control" 
                               id="userId" 
                               ref={userId}
                               placeholder="Your user Id"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postTitle"
                               className="form-label">
                               Post Title
                        </label>
                        <input type="text"
                               className="form-control" 
                               id="postTitle" 
                               ref={postTitle}
                               placeholder="How are you feeling today..."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postContent" 
                               className="form-label">
                               Post Content
                        </label>
                        <textarea className="form-control" 
                                  id="postContent" 
                                  rows="3" 
                                  ref={postContent}
                                  placeholder="Tell us more about it">
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="reactions" 
                               className="form-label">
                               Number of reactions
                        </label>
                        <input  type="text" 
                                className="form-control" 
                                id="reactions" 
                                ref={noOfReactions}
                                placeholder="How many people reacted to this post"/>
                    </div>
                    <div className="mb-3">
                        <label  htmlFor="hastags" 
                                className="form-label">
                                Enter your hashtags here
                        </label>
                        <input  type="text" 
                                className="form-control" 
                                id="hastags" 
                                ref={hastag}
                                placeholder="Please enter tags using space"/>
                    </div>
                    <button className="btn btn-primary">Post</button>
                </form>
            }
        </>
    )
}

export default CreatePost;