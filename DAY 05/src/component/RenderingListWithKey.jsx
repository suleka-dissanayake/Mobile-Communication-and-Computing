// When rendering a list, React needs a unique `key`.
const students = [
    { id: 1, name: "Kamal" },
    { id: 2, name: "Nimal" },
    { id: 3, name: "Sunil" }
];

export default function RenderingListWithKey() {

    return (
        <ul>
            {students.map(student => (
                <li key={student.id}>
                    {student.name}
                </li>
            ))}
        </ul>
    );
}

// Why Are Keys Needed?
// Keys help React identify which list item has: Added/Removed/Changed/Moved

// A key should be:

// * unique among siblings
// * stable
// * associated with the item

// Avoid using array index as a key when list items can be reordered, inserted, or removed
// key={index} // error