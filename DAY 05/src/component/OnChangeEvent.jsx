import { useState } from "react";
import './App.css'
// Used commonly with forms.
export default function OnChangeEvent() {

    const [name, setName] = useState("");

    return (<div className="diaplay">
        <label>Name:</label>
        <input
            value={name}
            onChange={(event) => setName(event.target.value)}
        /></div>
    );

    // this call as Controlled Components
    // A controlled input is an input whose value is controlled by React state.
}