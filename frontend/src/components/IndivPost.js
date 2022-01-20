import postStyle from '../styles/post.css'

const Post = (props) => {
    // post_id, post_title, post_description, post_image
    return (
        <div className={postStyle.container}>
            <h1>This is a post</h1>
        </div>
    )
};

export default Post;
