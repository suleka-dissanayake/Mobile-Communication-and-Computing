import { useState } from "react";
import StudentCard from "./StudentCard";

function Form() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);

  function validateForm() {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!regNo) {
      newErrors.regNo = "Registration number is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!age) {
      newErrors.age = "Age is required";
    } else if (isNaN(age)) {
      newErrors.age = "Age must be a number";
    }

    if (!course) {
      newErrors.course = "Course is required";
    }

    if (!image) {
      newErrors.image = "Image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

}