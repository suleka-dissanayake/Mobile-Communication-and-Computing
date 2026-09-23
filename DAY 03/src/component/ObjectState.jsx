import { useState } from "react";

export default function ObjectState() {
  const [person, setPerson] = useState({ name: "Alice", age: 30 });
    return (
        <div>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
                Increase Age
            </button>
        </div>
    );
}