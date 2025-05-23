import { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function Color(){
    const [bgColor , setBgColor] = useState("White")
    const handleColorChange = (color) =>{
        setBgColor(color)
    }
    return (
        <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
          <h1>Chọn màu nền</h1>
          <ColorPicker onColorChange={handleColorChange} />
        </div>
      );
}