import styles from "./Logo.module.css";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

const Logo = (props: Props) => {
  const { className = "", ...rest } = props;
  return (
    <h1 className={`${styles.Logo} ${className}`} {...rest}>
      AT
    </h1>
  );
};

export default Logo;
