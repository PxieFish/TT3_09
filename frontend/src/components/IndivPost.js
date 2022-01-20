import { BrowserRouter, Route, Routes } from 'react-router-dom';
import postStyle from '../styles/post.module.css'
import EditPost from './EditPost';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Post = (props) => {
    const navigate = useNavigate();

    const editPost = () => {
        navigate('/editPost')
    }
    const deletePost = () => {
        navigate('/deletePost')
    }
    // post_id, post_title, post_description, post_image
    return (
        <div className={postStyle.container}>
            <div className={postStyle.edit}>
                <h2 className={postStyle.title}>Post title</h2>
            </div>
            <div>
                <h3>Post content</h3>
            </div>
            <div className={postStyle.imgContainer}>
                <img className={postStyle.img} src="https://i.redd.it/in0kdzuienb81.jpg" alt="post"/>
            </div>
            <Button onClick={editPost}>Edit Post</Button>
            <Button onClick={deletePost}>Delete Post</Button>
        </div>
    )
};

export default Post;
