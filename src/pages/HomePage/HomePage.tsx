import React from "react";

import Color from "color";

import { ColorPicker, YingYangIcon } from "../../components";
import { useDroplet } from "../../providers";
import { getContrastingColor } from "../../utils";

const HomePage = () => {
  const [yingLayout, setYinLayout] = React.useState(true);

  const { createDroplet } = useDroplet();

  const onColorChange = (hex: string, event: React.MouseEvent) => {
    const color = Color(hex).hex();

    const contrastColor = getContrastingColor(color);

    createDroplet({ x: event.clientX, y: event.clientY, color: contrastColor });

    document.documentElement.style.setProperty("--var-yang", color);
    document.documentElement.style.setProperty("--var-yin", contrastColor);
  };

  return (
    <div className="flex flex-col flex-grow items-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        {yingLayout ? (
          <button className="w-48 h-48" onClick={() => setYinLayout(false)}>
            <YingYangIcon />
          </button>
        ) : (
          <>
            <div className="flex w-full justify-around">
              <button
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--var-yang",
                    "#fcf6f4"
                  );
                  document.documentElement.style.setProperty(
                    "--var-yin",
                    "#000000"
                  );
                }}
              >
                Reset
              </button>
              <button onClick={() => setYinLayout(true)}>Back</button>
            </div>
            <ColorPicker onChange={onColorChange} />
          </>
        )}
      </div>

      <p className="text-balance text-xl max-w-2xl mb-32 mt-20">
        Yin and yang are two sides of a dualism. Yin is passive and subdued.
        Yang, in contrast, is active and expressive. You can use any color to
        represent yin — similarly for yang, — so long as the contrast remains.
      </p>
    </div>
  );
};

export default HomePage;
