import { SwatchesPicker } from "react-color";

type Props = {
  onChange: (hex: string) => void;
  value: string;
};

const ColorPicker = (props: Props) => {
  const { value, onChange } = props;
  return (
    <SwatchesPicker color={value} onChange={(color) => onChange(color.hex)} />
  );
};

export default ColorPicker;
