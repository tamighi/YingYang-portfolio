import styles from "./Petal.module.css";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Petal = (props: Props) => {
  const { className = "", ...rest } = props;
  return <div className={`${styles.petal} ${className}`} {...rest} />;
};

export default Petal;
