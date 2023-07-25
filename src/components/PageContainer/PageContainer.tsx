import styles from "./PageContainer.module.css";

type Props = React.HTMLAttributes<HTMLDivElement>;

const PageContainer = (props: Props) => {
  const { className = "", ...rest } = props;
  return <div className={`${styles.PageContainer} ${className}`} {...rest} />;
};

export default PageContainer;
