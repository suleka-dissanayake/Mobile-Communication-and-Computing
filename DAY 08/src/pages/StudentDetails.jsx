import { Link, useParams } from 'react-router-dom';

const students = {
    101: { name: "Amal", course: "IT" },
    102: { name: "Kamal", course: "CS" },
    103: { name: "Nimal", course: "SE" },
};

export default function StudentDetails() {
    const { studentId } = useParams();
    const student = students[studentId];

    if (!student) {
        return (
            <div>
                <h2>Student not found</h2>
                <Link to="/students">Back to students</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Student Details</h2>
            <p>ID: {studentId}</p>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <Link to="/students">Back to students</Link>
        </div>
    );
}
