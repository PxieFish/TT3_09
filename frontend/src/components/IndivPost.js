import { BrowserRouter, Route, Routes } from 'react-router-dom';
import postStyle from '../styles/post.module.css'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import axios from 'axios';
import {apiRoot} from '../config';

function Like() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> {count} likes </p>
            <Button onClick={() => setCount(count + 1)}>Like</Button>
        </div>
    );
}

const Post = (props) => {
    
    const deletePost = (postTitle) => {
        axios.get(apiRoot + `/post/delete/postTitle=${postTitle}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("post deleted");
                    window.location.reload(false);
                }
            }).catch(e => {
                throw e;
            });
    }
    const navigate = useNavigate();
    const editPost = () => {
        navigate('/editPost')
    }
    // post_id, post_title, post_description, post_image
    return (
        <div className={postStyle.container}>
            <div className={postStyle.edit}>
                <h2 className={postStyle.title}>{props.postTitle}</h2>
            </div>
            <div>
                <h3>{props.postDescription}</h3>
            </div>
            <div className={postStyle.imgContainer}>
                <img className={postStyle.img} src={props.postImage} alt="post"/>
            </div>
            <Button onClick={editPost}>Edit Post</Button>
            <Button onClick={deletePost}>Delete Post</Button>
            <Like/>
        </div>
    )
};

export default Post;
