import { useMemo, useState } from "react";

function UseMemoComponent() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    //    When the page first loads, this runs expensiveResult
    //    You will see in the console: Expensive calculation is running

    //  click: Increase Count -> The component re-renders because count changes.
    // But the expensive calculation does not run again because:
    
    // then type in the input
    // Every time you type a character causes a re-render.
    // But the expensive calculation is not repeated.

    const expensiveResult = useMemo(() => {

        console.log("Expensive calculation is running");

        let total = 0;

        for (let i = 0; i < 100000000; i++) {
            total += i;
        }

        return total;

    }, []);

    return (
        <div>
            <h2>useMemo Example</h2>
            <h3>Expensive Result: {expensiveResult}</h3>

            <hr />

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <hr />

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h3>Hello {name}</h3>

        </div>
    );
}

export default UseMemoComponent;

// Why use useMemo?Every re-render would run the expensive calculation again.



// useMemo remembers result
//        ↓
// State changes
//        ↓
// Component re-renders
//        ↓
// useMemo gives the remembered result
//        ↓
// Expensive calculation does NOT run again


// Important: useMemo does not stop the component from re-rendering. 
// It prevents the memoized calculation from unnecessarily running again

