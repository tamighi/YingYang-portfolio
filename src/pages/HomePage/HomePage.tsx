import React from "react";
import { ColorPicker, YingYangIcon } from "../../components";

const HomePage = () => {
  const [center, setCenter] = React.useState(true);

  return (
    <div className="flex flex-col flex-grow">
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
      <div className="flex-grow self-center">
        <ColorPicker />
      </div>
      <p className="text-xl max-w-2xl mb-32 text-center">
        Yin and yang are two sides of a dualism. Yin is passive and subdued.
        Yang, in contrast, is active and expressive. You can use any color to
        represent yin — similarly for yang, — so long as the contrast remains.
      </p>
    </div>
  );
};

export default HomePage;
