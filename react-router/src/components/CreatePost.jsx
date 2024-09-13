import style from './CreatePost.module.css';
import { Form, redirect } from 'react-router-dom';

const CreatePost = () => {

    return (
        <>
            { 
                <Form method='Post' className={style.form}>
                    <div className="mb-3">
                        <label htmlFor="userId" 
                               className="form-label">
                               Enter your user id here
                        </label>
                        <input type="text" 
                               className="form-control" 
                               id="userId" 
                               name="userId"
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
                               name="title"
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
                                  name="body"
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
                                name="reactions"
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
                                name="tags"
                                placeholder="Please enter tags using space"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                </Form>
            }
        </>
    )
}

export async function CreatePostSubmit (data) {
    const Data = await data.request.formData();
    const postData = Object.fromEntries(Data);
    postData.tags = postData.tags.split(" ");

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then((post) => {
        console.log(post);
        }
    );

    return redirect("/");
}

export default CreatePost;