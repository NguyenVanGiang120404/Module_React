import { useState } from "react";
import FontControl from "./FontControl";
import Content from "./Content";

export default function FontSize() {
  const [fontSize, setFontSize] = useState(16); // mặc định 16px

  const increaseFont = () => {
    setFontSize((prev) => Math.min(prev + 2, 100));
  };

  const decreaseFont = () => {
    setFontSize((prev) => Math.max(prev - 2, 10));
  };

  return (
    <div>
      <h2>Điều chỉnh cỡ chữ: {fontSize}px</h2>
      <FontControl onIncrease={increaseFont} onDecrease={decreaseFont} />
      <Content fontSize={fontSize} />
    </div>
  );
}
