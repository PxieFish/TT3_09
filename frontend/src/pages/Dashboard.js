import {useState, useEffect} from 'react';
import axios from 'axios';
import IndivPost from '../components/IndivPost';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {apiRoot} from '../config';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(apiRoot + '/post/all').then(res => {
            setPosts(res.data);
        })
    })

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const navigate = useNavigate();
    const createPost = () => {
        navigate('/createPost')
    }
    const editPost = () => {
        navigate('/editPost')
    }

    return(

        <div className="app">
            <div>
                {posts.map((post) => (
                    <IndivPost id={post.Post_ID} postTitle={post.Post_Title} postDescription={post.Post_Description} postImage={post.Post_Image} />
                ))}
            </div>
            <Button onClick={createPost}>Create Post</Button>
            <Button onClick={editPost}>Edit Post</Button>

        </div>
    );
}