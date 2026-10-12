function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <img src={student.image} alt={student.name} className="student-image" />

      <h3>{student.name}</h3>
      <p className="course">{student.course}</p>

      <p>Reg No: {student.regNo}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>

      <button className="remove" onClick={() => onDelete(student.regNo)}>
        Remove
      </button>
    </div>
  );
}

export default StudentCard;