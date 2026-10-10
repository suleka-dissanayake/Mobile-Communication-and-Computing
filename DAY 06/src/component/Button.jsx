import React from "react";

function Button({ handleClick }) {

    console.log("Button component rendered");

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default React.memo(Button);

// React.memo() prevents the child from re-rendering when its props have not changed