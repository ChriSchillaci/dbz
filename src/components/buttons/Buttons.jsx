import styles from "./index.module.scss";

const Buttons = () => {
  return (
    <div className={styles.Buttons}>
      <div className={styles["btns-prev"]}>
        <button className={styles["btn-page"]}>{"<<"}</button>
        <button className={styles["btn-page"]}>{"<"}</button>
      </div>
      <p>
        Page <span>1</span> of <span>5</span>
      </p>
      <div className={styles["btns-next"]}>
        <button className={styles["btn-page"]}>{">"}</button>
        <button className={styles["btn-page"]}>{">>"}</button>
      </div>
    </div>
  );
};

export default Buttons;
