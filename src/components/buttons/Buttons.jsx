import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import styles from "./index.module.scss";

const Buttons = ({ charsData, page, setPage }) => {
  const handlePageBtn = (type) => {
    if (type === "decrement") {
      setPage((prev) => --prev);
      window.scrollBy(0, -4000);
    } else if (type === "increment") {
      setPage((prev) => ++prev);
      window.scrollBy(0, -4000);
    } else if (type === "dbl-decrement") {
      window.scrollBy(0, -4000);
      setPage(1);
    } else {
      window.scrollBy(0, -4000);
      setPage(charsData.meta?.totalPages);
    }
  };

  return (
    <div className={styles.Buttons}>
      <div className={styles["btns-prev"]}>
        <button
          className={styles["btn-page"]}
          disabled={page === 1 ? true : false}
          onClick={() => handlePageBtn("dbl-decrement")}
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className={`${styles["arrow-icons"]} ${
              page === 1 ? styles["arrow-icons__disabled"] : ""
            }`}
          />
        </button>
        <button
          className={styles["btn-page"]}
          disabled={page === 1 ? true : false}
          onClick={() => handlePageBtn("decrement")}
        >
          <MdOutlineKeyboardArrowLeft
            className={`${styles["arrow-icons"]} ${
              page === 1 ? styles["arrow-icons__disabled"] : ""
            }`}
          />
        </button>
      </div>
      <p>
        Page <span className={styles["number-page"]}>{page}</span> of{" "}
        <span className={styles["number-page"]}>
          {charsData.meta?.totalPages}
        </span>
      </p>
      <div className={styles["btns-next"]}>
        <button
          className={styles["btn-page"]}
          disabled={page === charsData.meta?.totalPages ? true : false}
          onClick={() => handlePageBtn("increment")}
        >
          <MdOutlineKeyboardArrowRight
            className={`${styles["arrow-icons"]} ${
              page === charsData.meta?.totalPages
                ? styles["arrow-icons__disabled"]
                : ""
            }`}
          />
        </button>
        <button
          className={styles["btn-page"]}
          disabled={page === charsData.meta?.totalPages}
          onClick={() => handlePageBtn("dbl-increment")}
        >
          <MdOutlineKeyboardDoubleArrowRight
            className={`${styles["arrow-icons"]} ${
              page === charsData.meta?.totalPages
                ? styles["arrow-icons__disabled"]
                : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
