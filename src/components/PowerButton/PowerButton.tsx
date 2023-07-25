import { PowerIcon } from "..";
import styles from "./PowerButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PowerButton = (props: Props) => {
  const { className = "", ...rest } = props;

  const invertColors = () => {
    const yin = getComputedStyle(document.documentElement).getPropertyValue(
      "--var-yin"
    );
    const yang = getComputedStyle(document.documentElement).getPropertyValue(
      "--var-yang"
    );

    document.documentElement.style.setProperty("--var-yin", yang);
    document.documentElement.style.setProperty("--var-yang", yin);
  };

  return (
    <button
      onClick={invertColors}
      className={`${styles.PowerButton} ${className}`}
      {...rest}
    >
      <PowerIcon />
    </button>
  );
};

export default PowerButton;
