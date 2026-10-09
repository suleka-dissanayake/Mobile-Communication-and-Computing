import { useState } from "react";
// Boolean state is useful for:
    // Show / Hide
    // Open / Close
    // Login / Logout
    // Dark / Light
    // Active / Inactive

export default function BooleanState() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                Show / Hide
            </button>

            {visible && <p>Hello Students</p>}
        </div>
    );
}