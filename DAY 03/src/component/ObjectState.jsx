import { useState } from "react";

export default function ObjectState() {
  const [student, setStudent] = useState({ name: "Alice", age: 30 });
    return (
        <div>
            <h2>{student.name}</h2>
            <h2>{student.age}</h2>
            <button onClick={() => setStudent({ ...student, age: student.age + 1 })}>
                Increase Age
            </button>
        </div>
    );
}