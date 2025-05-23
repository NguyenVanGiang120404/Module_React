export default function Content({ fontSize }) {
    return (
      <p style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}>
        Đây là đoạn văn bản với cỡ chữ thay đổi theo lựa chọn của bạn. Hãy thử bấm nút Tăng hoặc Giảm!
      </p>
    );
  }
  