import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-picker-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="color-picker">Select a color</label>
      <input
        type="color"
        name="color"
        id="color-picker"
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ColorPicker;
