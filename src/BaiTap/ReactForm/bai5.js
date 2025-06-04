import React, { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    newPassword: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.agreeToTerms) {
      setError('Bạn phải đồng ý với điều khoản sử dụng.');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    const { email, username } = formData;
    console.log('Thông tin đăng ký:', { email, username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tạo tài khoản nâng cao</h2>

      <label>Email:</label><br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Tên đăng nhập:</label><br />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Mật khẩu mới:</label><br />
      <input
        type="password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Xác nhận mật khẩu:</label><br />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      /><br /><br />

      <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        Tôi đồng ý với điều khoản sử dụng
      </label><br /><br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default RegisterForm;
