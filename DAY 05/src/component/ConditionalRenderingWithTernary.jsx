// condition ? trueValue : falseValue
export default function ConditionalRenderingWithTernary() {

    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn
                ? <h1>Welcome</h1>
                : <h1>Please Login</h1>
            }
        </div>
    );
}