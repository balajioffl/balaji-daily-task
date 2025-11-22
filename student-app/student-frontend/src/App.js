import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import "./App.css";


function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    try 
    {
      const response = await axios.get("http://127.0.0.1:8000/api/students/");
      setStudents(response.data);
    } 
    catch (error) 
    {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const createStudent = async (studentData) => {
    try 
    {
      await axios.post("http://127.0.0.1:8000/api/students/", studentData);
      fetchStudents();
    } 
    catch (error) 
    {
      console.error("Error creating student:", error);
    }
  };

  const updateStudent = async (id, studentData) => {
    try 
    {
      await axios.put(`http://127.0.0.1:8000/api/students/${id}/`, studentData);
      fetchStudents();
    } 
    catch (error) 
    {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try 
    {
      await axios.delete(`http://127.0.0.1:8000/api/students/${id}/`);
      fetchStudents();
    } 
    catch (error) 
    {
      console.error("Error deleting student:", error);
    }
  };

  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  const clearSelected = () => {
    setSelectedStudent(null);
  };

  return (

    <div className="App">

      <StudentForm
        createStudent={createStudent}
        updateStudent={updateStudent}
        selectedStudent={selectedStudent}
        clearSelected={clearSelected}
      />

      <StudentList
        students={students}
        selectStudent={selectStudent}
        deleteStudent={deleteStudent}
      />

    </div>
  );

}

export default App;
