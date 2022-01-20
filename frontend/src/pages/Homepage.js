import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import IndivPost from '../components/IndivPost';
import {apiRoot} from '../config';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

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
            <Button onClick={createPost}>Create Post</Button>
            <div>
                {posts.map((post) => (
                    <IndivPost id={post.Post_ID} postTitle={post.Post_Title} postDescription={post.Post_Description} postImage={post.Post_image} />
                ))}
            </div>
        </div>
    );
}
