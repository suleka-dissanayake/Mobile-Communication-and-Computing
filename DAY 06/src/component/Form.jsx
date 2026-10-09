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

    if (regNo.trim() === "") {
      newErrors.regNo = "Registration number is required";
    }

    if (!email.includes("@")) {
      newErrors.email = "Email is required";
    }

    if (age.trim() === "" || Number(age) < 18) {
      newErrors.age = "Age must be at least 18";
    }

    if (course === "") {
      newErrors.course = "Course is required";
    }

    if (!image || image.trim() === "") {
      newErrors.image = "Image is required";
    }

    return newErrors;
  }

}