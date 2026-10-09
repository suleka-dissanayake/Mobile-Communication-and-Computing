// React supports events such as:
// onClick
// onChange
// onSubmit
// onMouseEnter
// onMouseLeave
// onKeyDown
// onKeyUp
// onFocus
// onBlur
export default function EventHandlingOnClick() {

    function handleClick() {
        alert("Button clicked");
    }
    function handleAlertClick(name) {
        alert(name);
    }

    return (
        <> <button onClick={handleClick}>
            {/* Do not write:onClick={handleClick()}
            because this calls the function immediately during rendering. */}

            Click Me
        </button>
        <br/> <br/>

            <button onClick={() => handleAlertClick("Kamal")}>
                Passing Arguments to Event Handlers
            </button>
        </>



    );
}