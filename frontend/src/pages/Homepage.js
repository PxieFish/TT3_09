import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import IndivPost from '../components/IndivPost';
import {apiRoot} from '../config';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Like() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> {count} likes </p>
            <Button onClick={() => setCount(count + 1)}>Like</Button>
        </div>
    );
}

export default function Homepage() {

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

        <div className="homepage">
            <h1>Homepage</h1>
            <div>
                {posts.map((post) => (
                    <div>
                        <IndivPost id={post.Post_ID} postTitle={post.Post_Title} postDescription={post.Post_Description} postImage={post.Post_Image} />
                        <Like/>
                    </div>
                ))}
            </div>
            <Button onClick={createPost}>Create Post</Button>

        </div>
    );
}
