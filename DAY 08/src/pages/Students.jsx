import {Link} from "react-router-dom";

export default function Students() {
    const students = [
        {id: 101, name: "Amal"},
        {id: 102, name: "Kamal"},
        {id: 103, name: "Nimal"},
    ];

    return(
        <div>
            <h2>Student List</h2>
            
            {students.map((student) => (
                <p key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        {student.name} - View Details
                    </Link>
                </p>
            ))}
        </div>
    );
}