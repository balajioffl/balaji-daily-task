import React, { useState, useEffect } from "react";

function StudentForm({createStudent,updateStudent,selectedStudent,clearSelected,}) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    if (selectedStudent) 
    {
      setName(selectedStudent.name);
      setAge(selectedStudent.age);
      setGrade(selectedStudent.grade);
    }
  }, [selectedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = { name, age, grade };

    if (selectedStudent) 
    {
      updateStudent(selectedStudent.id, studentData);
    } 
    else 
    {
      createStudent(studentData);
    }

    setName("");
    setAge("");
    setGrade("");

    clearSelected();
  };

  return (
    <div>
      <h2>{selectedStudent ? "Update Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}
          required
        />

        <input type="number"  placeholder="Enter Age"  value={age}  onChange={(e) => setAge(e.target.value)}
          required
        />

        <input type="text"  placeholder="Enter Grade"  value={grade}  onChange={(e) => setGrade(e.target.value)}
          required
        />

        <button type="submit">{selectedStudent ? "Update" : "Add"}</button>

        {selectedStudent && (
          <button type="button" onClick={clearSelected}>Cancel Edit</button>
        )}

      </form>

    </div>

  );
}

export default StudentForm;
