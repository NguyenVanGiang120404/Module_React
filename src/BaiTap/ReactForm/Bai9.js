import React, { useState } from 'react';

function ScholarshipForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    GPA: '',
    familyIncome: '',
    major: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { studentName, GPA, familyIncome, major } = formData;

    const gpaValue = parseFloat(GPA);
    const incomeValue = parseFloat(familyIncome);

    if (!studentName.trim()) {
      setError('Vui lòng nhập họ tên.');
      return;
    }

    if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
      setError('GPA phải nằm trong khoảng từ 0 đến 4.');
      return;
    }

    if (isNaN(incomeValue) || incomeValue < 0) {
      setError('Thu nhập gia đình phải là số lớn hơn hoặc bằng 0.');
      return;
    }

    if (!major) {
      setError('Vui lòng chọn chuyên ngành.');
      return;
    }

    // Nếu hợp lệ
    console.log('Thông tin đăng ký học bổng:', {
      studentName,
      GPA: gpaValue,
      familyIncome: incomeValue,
      major,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký học bổng</h2>

      <label>Họ tên học sinh/sinh viên:</label><br />
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        required
      /><br /><br />

      <label>GPA:</label><br />
      <input
        type="number"
        step="0.01"
        name="GPA"
        value={formData.GPA}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Thu nhập gia đình (triệu VNĐ):</label><br />
      <input
        type="number"
        step="0.1"
        name="familyIncome"
        value={formData.familyIncome}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Chuyên ngành:</label><br />
      <select
        name="major"
        value={formData.major}
        onChange={handleChange}
        required
      >
        <option value="">-- Chọn chuyên ngành --</option>
        <option value="CNTT">Công nghệ thông tin</option>
        <option value="Kinh tế">Kinh tế</option>
        <option value="Y dược">Y dược</option>
        <option value="Sư phạm">Sư phạm</option>
      </select><br /><br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Gửi đăng ký</button>
    </form>
  );
}

export default ScholarshipForm;
