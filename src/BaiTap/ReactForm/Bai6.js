import React, { useState } from 'react';

function ProgrammingCourseForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    age: '',
    course: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { studentName, email, age, course } = formData;

    if (!studentName.trim()) {
      setError('Tên học viên không được để trống.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email không hợp lệ.');
      return;
    }

    if (isNaN(age) || Number(age) < 10) {
      setError('Tuổi phải là số và lớn hơn hoặc bằng 10.');
      return;
    }

    if (!course) {
      setError('Vui lòng chọn khóa học.');
      return;
    }

    // Nếu hợp lệ
    console.log('Thông tin đăng ký:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký lớp học lập trình</h2>

      <label>Họ tên học viên:</label><br />
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Email:</label><br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Tuổi:</label><br />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Khóa học:</label><br />
      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
      >
        <option value="">-- Chọn khóa học --</option>
        <option value="JS">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select><br /><br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default ProgrammingCourseForm;
