import Color from "color";
import { Variants, motion } from "framer-motion";
import { ColorPicker } from "../../../components";
import { useDroplet } from "../../../providers";
import { getContrastingColor } from "../../../utils";

type Props = {
  setYinLayout: () => void;
};

const variant: Variants = {
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  initial: {
    opacity: 0,
    y: 100,
  },
};

const ColorPickerLayout = (props: Props) => {
  const { setYinLayout } = props;

  const { createDroplet } = useDroplet();

  const onColorChange = (hex: string, event: React.MouseEvent) => {
    const color = Color(hex).hex();

    const contrastColor = getContrastingColor(color);

    createDroplet({ x: event.clientX, y: event.clientY, color: contrastColor });

    document.documentElement.style.setProperty("--var-yang", color);
    document.documentElement.style.setProperty("--var-yin", contrastColor);
  };

  return (
    <>
      <motion.div
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        key="colorPickerButtons"
        className="flex w-full justify-around"
      >
        <button
          onClick={() => {
            document.documentElement.style.setProperty("--var-yang", "#fcf6f4");
            document.documentElement.style.setProperty("--var-yin", "#000000");
          }}
        >
          Reset
        </button>
        <button onClick={setYinLayout}>Back</button>
      </motion.div>
      <motion.div
        variants={variant}
        exit="exit"
        animate="animate"
        initial="initial"
        key="colorPicker"
      >
        <ColorPicker onChange={onColorChange} />
      </motion.div>
    </>
  );
};

export default ColorPickerLayout;
