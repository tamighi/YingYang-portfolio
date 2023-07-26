import styles from "./Petal.module.css"

type Props = React.HTMLAttributes<HTMLDivElement>;

const Petal = (props: Props) => {
  return (
    <div
      className={styles.petal}
      {...props}
    />
  );
};

export default Petal;
