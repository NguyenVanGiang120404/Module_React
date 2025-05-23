export default function FontControl({ onIncrease, onDecrease }) {
    return (
      <div style={{ marginBottom: "20px" }}>
        <button onClick={onDecrease} style={{ marginRight: "10px" }}>Giảm</button>
        <button onClick={onIncrease}>Tăng</button>
      </div>
    );
  }
  