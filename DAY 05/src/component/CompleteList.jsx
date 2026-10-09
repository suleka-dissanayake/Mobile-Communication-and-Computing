   const students = [
        {
            id: 1,
            name: "Kamal",
            age: 22
        },
        {
            id: 2,
            name: "Nimal",
            age: 23
        },
        {
            id: 3,
            name: "Sunil",
            age: 21
        }
    ];

export default function CompleteList() {
    return (
        <div>
            <h2>Students</h2>
            {students.map(student => (
                <div key={student.id}>
                    <h3>name:{student.name}</h3>
                    <p>Age: {student.age}</p>
                </div>
            ))}
        </div>
    );
}