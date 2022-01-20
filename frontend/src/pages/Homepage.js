import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import IndivPost from '../components/IndivPost';

export default function Homepage() {
    return (
        <div className='homepage'>
            <h1>Homepage</h1>
            <div>
                <IndivPost />
                {/*{Like}*/}
            </div>
        </div>
    );
}

//function Like() {
//    const [count, setCount] = useState(0);

//    return (
//        <div>
//            <p> {count} likes </p>
//            <Button onClick={() => setCount(count + 1)}>Like</Button>
//        </div>
//    );
//}
