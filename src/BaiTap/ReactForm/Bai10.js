import React, { useState } from 'react';

function ProductReviewForm() {
  const [formData, setFormData] = useState({
    productId: '',
    rating: '',
    review: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { productId, rating, review } = formData;
    const ratingNum = Number(rating);

    if (!productId.trim()) {
      setError('Vui lòng nhập mã sản phẩm.');
      return;
    }

    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      setError('Đánh giá phải là số từ 1 đến 5.');
      return;
    }

    if (!review.trim()) {
      setError('Vui lòng nhập đánh giá.');
      return;
    }

    // Nếu hợp lệ
    console.log('Đánh giá sản phẩm:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đánh giá sản phẩm</h2>

      <label>Mã sản phẩm:</label><br />
      <input
        type="text"
        name="productId"
        value={formData.productId}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Đánh giá (1-5 sao):</label><br />
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        value={formData.rating}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Nhận xét:</label><br />
      <textarea
        name="review"
        value={formData.review}
        onChange={handleChange}
        rows="4"
        required
      /><br /><br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Gửi đánh giá</button>
    </form>
  );
}

export default ProductReviewForm;
