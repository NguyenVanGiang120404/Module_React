import React, { useState } from 'react';

function BirthdayCakeOrderForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    phone: '',
    cakeType: '',
    note: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValidPhone = (phone) => /^\d+$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { customerName, address, phone, cakeType } = formData;

    if (!customerName.trim()) {
      setError('Vui lòng nhập họ tên.');
      return;
    }

    if (!address.trim()) {
      setError('Vui lòng nhập địa chỉ.');
      return;
    }

    if (!phone.trim() || !isValidPhone(phone)) {
      setError('Số điện thoại không hợp lệ.');
      return;
    }

    if (!cakeType) {
      setError('Vui lòng chọn loại bánh.');
      return;
    }

    // Nếu hợp lệ
    console.log('Thông tin đặt bánh:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đặt bánh sinh nhật</h2>

      <label>Họ tên khách hàng:</label><br />
      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Địa chỉ:</label><br />
      <input
        type="text"
        name="address"
        value={formData.address}
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

      <label>Loại bánh:</label><br />
      <select
        name="cakeType"
        value={formData.cakeType}
        onChange={handleChange}
        required
      >
        <option value="">-- Chọn loại bánh --</option>
        <option value="Socola">Socola</option>
        <option value="Matcha">Matcha</option>
        <option value="Dâu">Dâu</option>
        <option value="Kem bơ">Kem bơ</option>
      </select><br /><br />

      <label>Ghi chú:</label><br />
      <textarea
        name="note"
        value={formData.note}
        onChange={handleChange}
        rows="3"
      /><br /><br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Đặt bánh</button>
    </form>
  );
}

export default BirthdayCakeOrderForm;
