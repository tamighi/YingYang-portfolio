import { Link } from "@tanstack/router";
import { PowerIcon } from "..";
import styles from "./PowerButton.module.css";

type Props = React.HTMLAttributes<HTMLAnchorElement>;

const PowerButton = (props: Props) => {
  const { className = "", ...rest } = props;
  return (
    <Link to="/" className={`${styles.PowerButton} ${className}`} {...rest}>
      <PowerIcon />
    </Link>
  );
};

export default PowerButton;
