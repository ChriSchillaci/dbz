import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import styles from "./index.module.scss";

const Buttons = ({ page, setPage }) => {
  const handlePageBtn = (type) => {
    if (type === "decrement" && page === 1) setPage(5);
    else if (type === "increment" && page === 5) setPage(1);
    else if (type === "decrement") setPage((prev) => --prev);
    else setPage((prev) => ++prev);
  };

  return (
    <div className={styles.Buttons}>
      <div className={styles["btns-prev"]}>
        <button className={styles["btn-page"]} onClick={() => setPage(1)}>
          <MdOutlineKeyboardDoubleArrowLeft className={styles["arrow-icons"]} />
        </button>
        <button
          className={styles["btn-page"]}
          onClick={() => handlePageBtn("decrement")}
        >
          <MdOutlineKeyboardArrowLeft className={styles["arrow-icons"]} />
        </button>
      </div>
      <p>
        Page <span className={styles["number-page"]}>{page}</span> of{" "}
        <span className={styles["number-page"]}>5</span>
      </p>
      <div className={styles["btns-next"]}>
        <button
          className={styles["btn-page"]}
          onClick={() => handlePageBtn("increment")}
        >
          <MdOutlineKeyboardArrowRight className={styles["arrow-icons"]} />
        </button>
        <button className={styles["btn-page"]} onClick={() => setPage(7)}>
          <MdOutlineKeyboardDoubleArrowRight
            className={styles["arrow-icons"]}
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
