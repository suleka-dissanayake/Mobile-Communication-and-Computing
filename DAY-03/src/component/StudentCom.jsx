import React from 'react';
import { useState } from 'react';

export default function StudentCom(name, course, age) {
    const [studentName, setStudentName] = useState(name);
    return (
        <div>
            <h2> Student Information</h2>
            <p>Name: {name}</p>
            <p>Course: {course}</p>
            <p>Age: {age}</p>
        </div>
    );
}