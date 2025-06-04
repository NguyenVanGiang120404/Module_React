import React, { useState } from 'react';

function FavoriteFoodForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    food: 'Cơm',
    extras: [],
    note: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const newExtras = checked
          ? [...prev.extras, value]
          : prev.extras.filter((item) => item !== value);
        return { ...prev, extras: newExtras };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thông tin món ăn yêu thích:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Chọn món ăn yêu thích</h2>

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

      <label>Món ăn yêu thích:</label><br />
      <select
        name="food"
        value={formData.food}
        onChange={handleChange}
      >
        <option value="Cơm">Cơm</option>
        <option value="Phở">Phở</option>
        <option value="Bún">Bún</option>
        <option value="Mì">Mì</option>
        <option value="Bánh mì">Bánh mì</option>
      </select><br /><br />

      <label>Thêm món phụ:</label><br />
      {['Trứng', 'Thịt bò', 'Gà', 'Rau'].map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            name="extras"
            value={item}
            checked={formData.extras.includes(item)}
            onChange={handleChange}
          />
          {item}
        </label>
      ))}<br /><br />

      <label>Ghi chú:</label><br />
      <textarea
        name="note"
        value={formData.note}
        onChange={handleChange}
        rows="4"
      /><br /><br />

      <button type="submit">Gửi</button>
    </form>
  );
}

export default FavoriteFoodForm;
