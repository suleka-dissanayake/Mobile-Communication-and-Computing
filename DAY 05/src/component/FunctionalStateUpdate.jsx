import { useState } from "react";

// When the new state depends on the previous state, it is better to use the functional form
export default function FunctionalStateUpdate() {
    // hook should come first then only function has to define
    const [count, setCount] = useState(0);

    function increase() {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>
                Increase
            </button>
        </div>
    );
}