import { Variants, motion } from "framer-motion";
import { YinYangIcon } from "../../../components";

type Props = {
  setPickerLayout: () => void;
};

const variant: Variants = {
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      type: "ease",
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

const YinYangLayout = (props: Props) => {
  const { setPickerLayout } = props;
  return (
    <motion.button
      variants={variant}
      exit="exit"
      animate="animate"
      initial="initial"
      className="w-48 h-48"
      onClick={setPickerLayout}
    >
      <YinYangIcon />
    </motion.button>
  );
};

export default YinYangLayout;
