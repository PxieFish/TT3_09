import postStyle from '../styles/post.module.css'

const Post = (props) => {
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
            <button className={postStyle.button}>Edit Post</button>
            <button className={postStyle.button}>Delete Post</button>
        </div>
    )
};

export default Post;
