import postStyle from '../styles/post.module.css'

const Post = (props) => {
    // postTitlle, postDescription, postImage
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
            <button className={postStyle.button}>Edit Post</button>
        </div>
    )
};

export default Post;
