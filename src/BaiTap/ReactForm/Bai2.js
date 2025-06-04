import React, { useState } from 'react';

function CommentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dữ liệu bình luận:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Viết bình luận</h2>

      <label>Tên:</label><br />
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

      <label>Đánh giá:</label><br />
      {[1, 2, 3, 4, 5].map((star) => (
        <label key={star}>
          <input
            type="radio"
            name="rating"
            value={star}
            checked={formData.rating === String(star)}
            onChange={handleChange}
          />
          {star} sao
        </label>
      ))}<br /><br />

      <label>Bình luận:</label><br />
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        rows="4"
        required
      /><br /><br />

      <button type="submit">Gửi bình luận</button>
    </form>
  );
}

export default CommentForm;
