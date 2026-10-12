import { useState } from "react";
import StudentCard from "./StudentCard";

function Form() {
  // 1. State for each input
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");

  // 2. State for errors, success message and the student list
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);

  // 3. Check the inputs and return an object of errors
  function validateForm() {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Student name is required";
    }

    if (regNo.trim() === "") {
      newErrors.regNo = "Registration number is required";
    }

    if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (age === "" || Number(age) < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    if (course === "") {
      newErrors.course = "Please select a course";
    }

    if (image.trim() === "") {
      newErrors.image = "Please upload a profile image";
    }

    return newErrors;
  }

  // 4. Runs when the user picks an image file
  function handleImageChange(e) {
    const file = e.target.files[0]; // the first selected file

    if (file) {
      // Make a temporary URL the <img> tag can display
      setImage(URL.createObjectURL(file));
    }
  }

  // 5. Runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading

    const newErrors = validateForm();
    setErrors(newErrors);
    setMessage("");

    // If there is any error, stop here
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const newStudent = { name, regNo, email, age, course, image };

    setStudents([...students, newStudent]); // add to the list
    setMessage("Student registered successfully!");

    // Clear the form (reset() also clears the file input)
    e.target.reset();
    setName("");
    setRegNo("");
    setEmail("");
    setAge("");
    setCourse("");
    setImage("");
  }

  // 6. Remove one student from the list
  function handleDelete(regNoToRemove) {
    setStudents(students.filter((s) => s.regNo !== regNoToRemove));
  }

  return (
    <div className="container">
      <h1>Student Registration System</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="2023/ICT/01"
          />
          {errors.regNo && <p className="error">{errors.regNo}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@gmail.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="form-group">
          <label>Course</label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Computer Science">Computer Science</option>
          </select>
          {errors.course && <p className="error">{errors.course}</p>}
        </div>

        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Preview" className="preview" />}
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <button type="submit">Register Student</button>
      </form>

      {message && <p className="success">{message}</p>}

      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <StudentCard
              key={student.regNo}
              student={student}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Form;