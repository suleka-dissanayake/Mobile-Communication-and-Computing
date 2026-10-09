// useEffect` is used to perform
// * API requests
// * timers
// * subscriptions
// * updating document title
// * working with external systems

import { useEffect } from "react";

export default function UseEffectHook() {

    useEffect(() => {
        console.log("Component rendered");
    }, []);
// The empty dependency array,
// means the effect runs after the initial render.
    return <h1>Hello</h1>;
}