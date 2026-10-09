export default function OnSubmitForm() {

    function handleSubmit(event) {
        // preventDefault()` prevents the browser's normal form submission.
        event.preventDefault();
        alert("Form submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">
                Login
            </button>
        </form>
    );
}