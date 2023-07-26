import React from "react";

import styles from "./ColorPicker.module.css";
import Petal from "./Petal";

const colors = [
  "#ff0000", // Red
  "#ff8000", // Orange
  "#ffff00", // Yellow
  "#80ff00", // Lime Green
  "#00ff00", // Green
  "#00ff80", // Teal
  "#00ffff", // Cyan
  "#0080ff", // Sky Blue
  "#0000ff", // Blue
  "#8000ff", // Purple
  "#ff00ff", // Magenta
  "#ff0080", // Pink
  "#ff6666", // Light Red
  "#ffcc66", // Light Orange
  "#ffff66", // Light Yellow
  "#bfff80", // Light Lime Green
  "#66ff66", // Light Green
  "#66ffd9", // Light Teal
  "#66ffff", // Light Cyan
  "#66b2ff", // Light Sky Blue
];

type Props = {
  onChange: (hex: string) => void;
};

const ColorPicker = (props: Props) => {
  const { onChange } = props;
  const [clicked, setClicked] = React.useState(-1);

  return (
    <div className={styles.sunflower}>
      {colors.map((color, index) => (
        <Petal
          key={index}
          style={{
            backgroundColor: color,
            transform: `rotate(${index * (360 / colors.length)}deg)`,
          }}
          onClick={() => {
            onChange(color);
            setClicked(index);
          }}
       / >
        
      ))}
    </div>
  );
};

export default ColorPicker;
