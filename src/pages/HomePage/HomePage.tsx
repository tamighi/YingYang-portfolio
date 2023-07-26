import React from "react";

import Color from "color";

import { ColorPicker, YingYangIcon } from "../../components";
import { useDroplet } from "../../providers";

function getContrastingColor(hexColor: string): string {
  const color = Color(hexColor);

  // Check if the color is light or dark based on its luminosity
  const isLightColor = color.luminosity() > 0.5;

  // Adjust the lightness based on the luminosity while preserving the original hue and saturation
  const lightnessFactor = isLightColor ? 0.2 : 0.8;
  const adjustedColor = color.lightness(lightnessFactor * 100);

  // Rotate the hue by 180 degrees for better contrast
  const contrastingColor = adjustedColor.rotate(180).hex();

  return contrastingColor;
}

const HomePage = () => {
  const [center, setCenter] = React.useState(true);

  const { createDroplet } = useDroplet();

  const onColorChange = (hex: string, event: React.MouseEvent) => {
    const color = Color(hex);

    const contrastColor = getContrastingColor(color.hex());

    createDroplet({ x: event.clientX, y: event.clientY, color: contrastColor });

    document.documentElement.style.setProperty("--var-yang", color.hex());
    document.documentElement.style.setProperty("--var-yin", contrastColor);
  };

  return (
    <div className="flex flex-col flex-grow items-center">
      <button
        className={`cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] transition-yinYang duration-1000 ${
          center
            ? "top-[50%] left-[50%] w-48 h-48"
            : "top-[85%] left-[92%] w-32 h-32"
        }`}
        onClick={() => setCenter(!center)}
      >
        <YingYangIcon />
      </button>

      <div className="flex-grow flex items-center">
        {center ? null : <ColorPicker onChange={onColorChange} />}
      </div>

      <p className="text-balance text-xl max-w-2xl mb-32">
        Yin and yang are two sides of a dualism. Yin is passive and subdued.
        Yang, in contrast, is active and expressive. You can use any color to
        represent yin — similarly for yang, — so long as the contrast remains.
      </p>
    </div>
  );
};

export default HomePage;
