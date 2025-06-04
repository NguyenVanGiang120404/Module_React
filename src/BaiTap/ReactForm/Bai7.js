import React, { useState } from 'react';

function ConsultingRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { name, email, phone, message } = formData;

    if (!name.trim()) {
      setError('Vui lòng nhập họ tên.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Email không hợp lệ.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Số điện thoại phải gồm 10 chữ số.');
      return;
    }

    if (message.trim().length < 10) {
      setError('Lời nhắn phải từ 10 ký tự trở lên.');
      return;
    }

    // Nếu hợp lệ
    console.log('Yêu cầu tư vấn:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Yêu cầu tư vấn</h2>

      <label>Họ tên:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
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

      <label>Số điện thoại:</label><br />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Lời nhắn:</label><br />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
      /><br /><br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Gửi yêu cầu</button>
    </form>
  );
}

export default ConsultingRequestForm;
