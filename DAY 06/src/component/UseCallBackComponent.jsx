import { useCallback, useState } from "react";
import Button from "./Button";

function UseCallBackComponent() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <div>
            <h1>UseCallBack Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
            <br />
            <br />
            <Button handleClick={handleClick} />
        </div>
    );
}

export default UseCallBackComponent;


// Without useCallback

// Parent re-renders
//        ↓
// New handleClick function
//        ↓
// Button receives new function
//        ↓
// Button may re-render


// With useCallback

// Parent re-renders
//        ↓
// Same handleClick function
//        ↓
// Button receives same function
//        ↓
// React.memo prevents unnecessary render


// useMemo vs useCallback

// | useMemo                         | useCallback                         |
// | ------------------------------- | ----------------------------------- |
// | Memoizes a value                | Memoizes a function                 |
// | Returns calculated result       | Returns function                    |
// | Used for expensive calculations | Used for stable callback references |
