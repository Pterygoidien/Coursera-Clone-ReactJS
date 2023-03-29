import styles from "./Container.module.scss";

const Container = (props) => {
  const classes = [];
  if (props.className) {
    props.className.split(" ").forEach((cls) => classes.push(cls));
  }
  return (
    <div
      className={`${styles.container} 
      ${classes.map((i) => styles[i])}`}
    >
      {props.children}
    </div>
  );
};
export default Container;
