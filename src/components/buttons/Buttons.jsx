import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { handlePageBtn } from "@/utils/handle_page";
import styles from "./index.module.scss";

const Buttons = ({ charsData, page, setPage }) => {
  const { totalPages } = charsData.meta || {};

  return (
    <div className={styles.Buttons}>
      <div className={styles["btns-prev"]}>
        <button
          className={styles["btn-page"]}
          disabled={page === 1}
          onClick={() => handlePageBtn("dbl-decrement", setPage)}
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className={`${styles["arrow-icons"]} ${
              page === 1 && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
        <button
          className={styles["btn-page"]}
          disabled={page === 1}
          onClick={() => handlePageBtn("decrement", setPage)}
        >
          <MdOutlineKeyboardArrowLeft
            className={`${styles["arrow-icons"]} ${
              page === 1 && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
      </div>
      <p>
        Page <span className={styles["number-page"]}>{page}</span> of{" "}
        <span className={styles["number-page"]}>{totalPages}</span>
      </p>
      <div className={styles["btns-next"]}>
        <button
          className={styles["btn-page"]}
          disabled={page === totalPages}
          onClick={() => handlePageBtn("increment", setPage)}
        >
          <MdOutlineKeyboardArrowRight
            className={`${styles["arrow-icons"]} ${
              page === totalPages && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
        <button
          className={styles["btn-page"]}
          disabled={page === totalPages}
          onClick={() => handlePageBtn("dbl-increment", setPage, totalPages)}
        >
          <MdOutlineKeyboardDoubleArrowRight
            className={`${styles["arrow-icons"]} ${
              page === totalPages && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
