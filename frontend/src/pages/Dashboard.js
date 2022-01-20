import {useState, useEffect} from 'react';
import axios from 'axios';
import IndivPost from '../components/IndivPost';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {apiRoot} from '../config';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(apiRoot + '/post/all').then(res => {
            setPosts(res.data);
        })
    })

    const navigate = useNavigate();
    const createPost = () => {
        navigate('/createPost')
    }

    return(

        <div className="app">
            <h1>Dashboard</h1>  
            <div>
                {posts.map((post) => (
                    <IndivPost id={post.Post_ID} postTitle={post.Post_Title} postDescription={post.Post_Description} postImage={post.Post_Image} />
                ))}
            </div>
            <Button onClick={createPost}>Create Post</Button>

        </div>
    );
}