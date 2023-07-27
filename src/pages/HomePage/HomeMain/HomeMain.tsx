import React from "react";

import { AnimatePresence } from "framer-motion";

import YinYangLayout from "./YinYangLayout";
import ColorPickerLayout from "./ColorPickerLayout";

const HomeMain = () => {
  const [yingLayout, setYinLayout] = React.useState(true);

  return (
    <AnimatePresence mode="wait">
      {yingLayout ? (
        <YinYangLayout
          key="YinYangLayout"
          setPickerLayout={() => setYinLayout(false)}
        />
      ) : (
        <ColorPickerLayout
          key="ColorPickerLayout"
          setYinLayout={() => setYinLayout(true)}
        />
      )}
    </AnimatePresence>
  );
};

export default HomeMain;
