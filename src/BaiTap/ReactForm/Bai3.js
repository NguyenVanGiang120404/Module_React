import React, { useState } from 'react';

function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    hobby: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const newHobby = checked
          ? [...prev.hobby, value]
          : prev.hobby.filter((item) => item !== value);
        return { ...prev, hobby: newHobby };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thông tin người dùng:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Khai báo thông tin cá nhân</h2>

      <label>Họ tên:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
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

      <label>Giới tính:</label><br />
      {['Nam', 'Nữ', 'Khác'].map((g) => (
        <label key={g}>
          <input
            type="radio"
            name="gender"
            value={g}
            checked={formData.gender === g}
            onChange={handleChange}
          />
          {g}
        </label>
      ))}<br /><br />

      <label>Sở thích:</label><br />
      {['Đọc sách', 'Du lịch', 'Thể thao', 'Game'].map((hobby) => (
        <label key={hobby}>
          <input
            type="checkbox"
            name="hobby"
            value={hobby}
            checked={formData.hobby.includes(hobby)}
            onChange={handleChange}
          />
          {hobby}
        </label>
      ))}<br /><br />

      <button type="submit">Gửi thông tin</button>
    </form>
  );
}

export default PersonalInfoForm;
