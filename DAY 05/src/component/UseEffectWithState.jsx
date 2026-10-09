
import { useState, useEffect } from "react";

// export default function UseEffectWithState() {

//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `Count: ${count}`;
//     }, [count]);

//     return (
//         <button onClick={() => setCount(count + 1)}>
//             Count: {count}
//         </button>

//         // Every time `count` changes, the effect runs.
//     );
// }

// useEffect Dependency Array

// No dependency array

// useEffect(() => {
//     console.log("Effect");
// });
// Runs after every render.


// Empty dependency array
// useEffect(() => {
//     console.log("Effect");
// }, []);

// Runs after initial render.

// Dependency
// useEffect(() => {
//     console.log(count);
// }, [count]);
// Runs when `count` changes.



export default function UseEffectWithState() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <h1>Count: {count}</h1>
    );
}

// setInterval() → Increases the count every 1 second.
// setCount(count => count + 1) → Updates the count.
// return () => { clearInterval(interval); } → Cleanup function that stops the interval when the component is unmounted.

// use case: 
// Timer
// Event listener
// Subscription
// WebSocket