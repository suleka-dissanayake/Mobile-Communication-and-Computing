import { useState } from "react";

export default function ArrayObject() {
    const [students, setStudents] = useState([
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 },
    ]); 

    const addStudent = () => {
        const newStudent = { name: "David", age: 28 };
        setStudents([...students, newStudent]);
    }

    const removeStudent = () => {
        setStudents(students.filter(student => student.name !== "Bob"));
    }

    return (
        <div>
            {students.map((student, index) => ( 
                <div key={index}>
                    <h2>{student.name}</h2>
                    <h2>{student.age}</h2>
                    <h3>{student.course}</h3>
                </div>
            ))}
        </div>
    );
}