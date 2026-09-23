import { useEffect } from "react";

export default function UseEffectHook() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}