import './App.css'; 
import React, { useState } from 'react'; 
import StudentTable from './StudentTable'; 
import StudentForm from './StudentForm'; 

function App() {
  const [students, setStudents] = useState([]); // Khai báo state 'students' và hàm 'setStudents', khởi tạo giá trị ban đầu là một mảng rỗng
  const [editingStudent, setEditingStudent] = useState(null); // Khai báo state 'editingStudent' và hàm 'setEditingStudent', khởi tạo giá trị ban đầu là null

  const addStudent = (student) => { // Hàm để thêm sinh viên mới vào mảng students
    setStudents([...students, student]); // Cập nhật state students với một mảng mới bao gồm các sinh viên hiện tại và sinh viên mới
  };

  const deleteStudent = (index) => { // Hàm để xóa sinh viên theo chỉ số (index) trong mảng students
    const newStudents = [...students]; // Tạo một bản sao của mảng students
    newStudents.splice(index, 1); // Xóa một phần tử tại vị trí index
    setStudents(newStudents); // Cập nhật state students với mảng mới đã bị xóa
  };

  const editStudent = (index, updatedStudent) => { // Hàm để chỉnh sửa thông tin sinh viên
    const newStudents = [...students]; // Tạo một bản sao của mảng students
    newStudents[index] = updatedStudent; // Cập nhật sinh viên tại vị trí index với thông tin mới
    setStudents(newStudents); // Cập nhật state students với mảng mới đã chỉnh sửa
  };

  return (
    <div className="App"> 
      <div class="title"> 
        <h1>Quản lý sinh viên</h1> 
      </div>
      <div class="stdForm">
        <StudentForm 
          addStudent={addStudent} // Truyền hàm addStudent vào component StudentForm
          editingStudent={editingStudent} // Truyền state editingStudent vào component StudentForm
          editStudent={editStudent} // Truyền hàm editStudent vào component StudentForm
        />
      </div>
      <div class="stdtable"> 
        <StudentTable 
          students={students} // Truyền state students vào component StudentTable
          deleteStudent={deleteStudent} // Truyền hàm deleteStudent vào component StudentTable
          setEditingStudent={setEditingStudent} // Truyền hàm setEditingStudent vào component StudentTable
        />
      </div>
    </div>
  );
}

export default App; // Xuất component App để có thể sử dụng ở nơi khác
