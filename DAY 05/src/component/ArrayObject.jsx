
import { useState } from "react";

export default function ArrayObject() {

    const [students, setStudents] = useState([
        "Kamal",
        "Nimal",
        "Sunil"
    ]);

    // Add student
    const addStudent = () => {
        setStudents([
            ...students,
            "John"
        ]);
    };

    // Remove student
    const removeStudent = () => {
        setStudents(
            students.filter(student => student !== "John")
        );
    };

    return (
        <div>
            <h2>Student List</h2>

            <button onClick={addStudent}>
                Add John
            </button>
            <button onClick={removeStudent}>
                Remove John
            </button>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </div>
    );
}


// export default function ArrayObject() {

//     const [students, setStudents] = useState([
//         "Kamal",
//         "Nimal",
//         "Sunil"
//     ]);

//     const [newStudent, setNewStudent] = useState("");

//     // Add a student
//     const addStudent = () => {

//         if (newStudent.trim() !== "") {

//             setStudents([
//                 ...students,
//                 newStudent
//             ]);

//             setNewStudent("");
//         }
//     };

//     // Remove a student
//     const removeStudent = (studentToRemove) => {

//         setStudents(
//             students.filter(
//                 student => student !== studentToRemove
//             )
//         );

//     };

//     return (

//         <div style={{
//             textAlign: "center",
//             marginTop: "30px",
//             fontFamily: "Arial"
//         }}>

//             <h1>Student Management</h1>

//             {/* Input field */}
//             <input
//                 type="text"
//                 placeholder="Enter student name"
//                 value={newStudent}
//                 onChange={(e) => setNewStudent(e.target.value)}
//                 style={{
//                     padding: "10px",
//                     marginRight: "10px"
//                 }}
//             />

//             {/* Add button */}
//             <button
//                 onClick={addStudent}
//                 style={{
//                     padding: "10px",
//                     backgroundColor: "green",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer"
//                 }}
//             >
//                 Add Student
//             </button>

//             <h2>Student List</h2>

//             <ul style={{
//                 listStyle: "none",
//                 padding: 0
//             }}>

//                 {students.map((student, index) => (

//                     <li
//                         key={index}
//                         style={{
//                             margin: "10px"
//                         }}
//                     >

//                         {student}

//                         <button
//                             onClick={() => removeStudent(student)}
//                             style={{
//                                 marginLeft: "15px",
//                                 backgroundColor: "red",
//                                 color: "white",
//                                 border: "none",
//                                 padding: "5px",
//                                 cursor: "pointer"
//                             }}
//                         >
//                             Remove
//                         </button>

//                     </li>

//                 ))}

//             </ul>

//         </div>

//     );

// }


//  Props vs State

// | Props                | State                   |
// | -------------------- | ----------------------- |
// | Passed from parent   | Managed by component    |
// | Read-only            | Can be changed          |
// | Used to pass data    | Used for changing data  |
// | Controlled by parent | Controlled by component |
// | External data        | Internal data           |
