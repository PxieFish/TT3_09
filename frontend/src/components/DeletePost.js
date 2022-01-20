import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import postStyle from '../styles/post.module.css'

const DeletePost = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const postTitle = document.getElementById("postTitle");
        const postDescription = document.getElementById("postDescription");
        const postImage = document.getElementById("postImage");

        document.getElementById("titleNote").innerHTML = null;
        document.getElementById("descriptionNote").innerHTML = null;
        document.getElementById("imageNote").innerHTML = null;

        let noError = true;

        if (postTitle.value.length === 0) {
            document.getElementById("titleNote").innerHTML = "Post title missing!";
            noError = false;
        }
        if (postDescription.value.length === 0) {
            document.getElementById("descriptionNote").innerHTML = "Post description missing!";
            noError = false;
        }      
        if (postImage.value.length === 0) {
            document.getElementById("imageNote").innerHTML = "Post image url missing!";
            noError = false;
        }

        if (noError) {
            const data = {
                "title": postTitle.value,
                "description": postDescription.value,
                "image": postImage.value,
            }

            //todo - axios post
        }
    }

	const warningStyle = {
		"fontSize": "0.8rem",
		"color": "red",
		"display": "block"
	}

    return(
        <div className={postStyle.divStyle}>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="postTitle">
					<Form.Label>Title of Post</Form.Label>
                    <br/>
					<Form.Control type="text" placeholder="Enter post title" />
					<Form.Text id="titleNote" style={warningStyle}></Form.Text>
				</Form.Group>
                <br/>
				<Form.Group controlId="postDescription" className="input-large">
					<Form.Label>Description</Form.Label>
                    <br/>
					<Form.Control type="text" placeholder="Enter post description" as="textarea" rows={5} cols={100}/>
					<Form.Text id="descriptionNote" style={warningStyle}></Form.Text>
				</Form.Group>
                <br/>
				<Form.Group controlId="postImage">
					<Form.Label>Image</Form.Label>
                    <br/>
					<Form.Control type="text" placeholder="Enter post image URL" />
					<Form.Text id="imageNote" style={warningStyle}></Form.Text>
				</Form.Group>
                <br/>
                <Button variant="primary" type="submit">Post</Button>
            </Form>
        </div>
    )
};

export default DeletePost;
