import {Link, useParams} from 'react-router-dom';

export default function StudentDetails() {
    const {studentId} = useParams();

    const students = {
        101: {name: "Amal", course: "IT"},
        102: {name: "Kamal", course: "CS"},
        103: {name: "Nimal", course: "SE"}
    };

    const student = students[studentId];

    if(!student) {
        return(
            <div>
                <h2>Not found</h2>
                <Link to="/students">Back to students</Link>
            </div>
        );
    }
}