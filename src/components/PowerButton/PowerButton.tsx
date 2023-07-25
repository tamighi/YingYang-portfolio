import { PowerIcon } from "..";
import styles from "./PowerButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PowerButton = (props: Props) => {
  const { className = "", ...rest } = props;
  return (
    <button className={`${styles.PowerButton} ${className}`} {...rest}>
      <PowerIcon />
    </button>
  );
};

export default PowerButton;
