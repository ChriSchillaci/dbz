import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { handlePageBtn } from "@/utils/handle_page";
import styles from "./index.module.scss";
import { ButtonsProps } from "@/types/charTypes";
import { useRouter } from "next/router";

const Buttons = ({ charsData, page }: ButtonsProps) => {
  const { totalPages } = charsData.meta || {};
  const router = useRouter();

  return (
    <div className={styles.Buttons}>
      <div className={styles["btns-prev"]}>
        <button
          className={styles["btn-page"]}
          disabled={page == 1}
          onClick={() => handlePageBtn("dbl-decrement", page, router)}
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className={`${styles["arrow-icons"]} ${
              page == 1 && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
        <button
          className={styles["btn-page"]}
          disabled={page == 1}
          onClick={() => handlePageBtn("decrement", page, router)}
        >
          <MdOutlineKeyboardArrowLeft
            className={`${styles["arrow-icons"]} ${
              page == 1 && styles["arrow-icons__disabled"]
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
          disabled={page == totalPages}
          onClick={() => handlePageBtn("increment", page, router)}
        >
          <MdOutlineKeyboardArrowRight
            className={`${styles["arrow-icons"]} ${
              page == totalPages && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
        <button
          className={styles["btn-page"]}
          disabled={page == totalPages}
          onClick={() =>
            handlePageBtn("dbl-increment", page, router, totalPages)
          }
        >
          <MdOutlineKeyboardDoubleArrowRight
            className={`${styles["arrow-icons"]} ${
              page == totalPages && styles["arrow-icons__disabled"]
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
