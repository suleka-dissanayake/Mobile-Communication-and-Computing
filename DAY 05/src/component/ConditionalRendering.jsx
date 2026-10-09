// Conditional rendering means displaying different UI depending on a condition.

export default function ConditionalRendering() {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <h1>Welcome</h1>;
    }
    return <h1>Please Login</h1>;
}