import { useState } from "react";

export default function ConditionalRenderingWithAnd() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsLoggedIn(true)}>
                Login
            </button>

            {isLoggedIn && <h1>Welcome</h1>}
        </div>
    );
}
