import React, { useState } from 'react';

function SubscribeForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    frequency: 'Hàng ngày',
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value);
        return { ...prev, interests: newInterests };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Cảm ơn ${formData.name} đã đăng ký nhận tin!\nTần suất: ${formData.frequency}\nChủ đề quan tâm: ${formData.interests.join(', ')}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký nhận tin</h2>

      <label>Email:</label><br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Họ tên:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Tần suất nhận tin:</label><br />
      <select
        name="frequency"
        value={formData.frequency}
        onChange={handleChange}
      >
        <option value="Hàng ngày">Hàng ngày</option>
        <option value="Hàng tuần">Hàng tuần</option>
        <option value="Hàng tháng">Hàng tháng</option>
      </select><br /><br />

      <label>Chủ đề quan tâm:</label><br />
      <label>
        <input
          type="checkbox"
          name="interests"
          value="Tin công nghệ"
          checked={formData.interests.includes("Tin công nghệ")}
          onChange={handleChange}
        /> Tin công nghệ
      </label><br />
      <label>
        <input
          type="checkbox"
          name="interests"
          value="Ưu đãi"
          checked={formData.interests.includes("Ưu đãi")}
          onChange={handleChange}
        /> Ưu đãi
      </label><br />
      <label>
        <input
          type="checkbox"
          name="interests"
          value="Tin tức"
          checked={formData.interests.includes("Tin tức")}
          onChange={handleChange}
        /> Tin tức
      </label><br /><br />

      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default SubscribeForm;
