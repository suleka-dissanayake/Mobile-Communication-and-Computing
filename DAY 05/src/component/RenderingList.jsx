// React commonly uses JavaScript `map()` to display lists.
const students = [
    "Kamal",
    "Nimal",
    "Sunil"
];

export default function RenderingList() {

    return (
        <ul>
            {students.map(student => (
                <li>{student}</li>
            ))}
        </ul>
    );
}