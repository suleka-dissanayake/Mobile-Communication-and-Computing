// Hooks are special React functions that allow functional components to use React features such as:

// * state
// * effects
// * context
// * references
// * reducers
// * performance optimization

// Hooks normally start with:use


// useState()
// useEffect()
// useContext()
// useRef()
// useReducer()
// useMemo()
// useCallback()

// Rules of Hooks

// Rule 1: Only call Hooks at the top level of a component.

// function App() {

//     const [count, setCount] = useState(0);

//     return <h1>{count}</h1>;
// }

// Rule 2: Do not call Hooks inside: if, for, while, nested functions

// Rule 3: Only call Hooks from: React functional components or custom Hooks