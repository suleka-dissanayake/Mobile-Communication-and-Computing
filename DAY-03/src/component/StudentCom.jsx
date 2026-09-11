import React from 'react';

export default function StudentCom(props) {
    return (
        <div>
            <h2> Student Information</h2>
            <p>Name: {props.name}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}