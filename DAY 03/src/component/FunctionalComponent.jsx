import { useState } from 'react';

export default function FunctionalComponent(props) {
    return <h1>Hello, {props.name}! Welcome to my functional component!</h1>;
}

export default function Greeting(props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className='bg'>Hello {props.name}</h1>
            <button onclick={()=>setCount(count+1)}>{count}</button>
        </>
    );
}