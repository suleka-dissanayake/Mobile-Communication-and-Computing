import { useState } from "react";

export default function ConditionRendingWithTernary() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
            {setIsLoggedIn ? <h2>Welcome</h2> : <h2>Please Login</h2>}
        </div>
    );
}