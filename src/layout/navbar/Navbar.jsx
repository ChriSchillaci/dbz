import { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import styles from "./index.module.scss";

const Navbar = ({ isBtnActive, currentPage }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    setIsDropdownActive((prev) => (prev ? false : null));
  }, [currentPage]);

  const handleDropdown = () => {
    setIsDropdownActive((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <Link href="/">
          <img
            className={styles["logo-img"]}
            src="https://s3-alpha-sig.figma.com/img/f28e/7d69/782b92e3b7da64810c97f006f9b1451f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBs1z67F-0E3-Y1JozBLXnPFVjU4kMpBhO63shx3HsZS~sGBWu5bszkILXDwN4H~-wmJ7dqit2KaNyYH2e5IajAd0MAeD~ih--XY0uPzNklK5QXsLjErNAPYnN~2PQDgkwsnLWEdrSgC2iyW8FKz9ccKH6CQcI57nvjzQqq-LHv25rtTb~djgiC~HUQjbsHXfS3itd7DqDrOzkgiSJRZRBHABF45dR7J5E~Vf1-eX~FyGavQPlYa7aEhu4ksjHxNQJoLEYsS1R3-CIbdPG1DwLgje0C5WdRsPpDaORj-wVmY2ejs1Se24BkelhE4~V5PFv5Iau1jVv1ulNTl52YJgQ__"
            alt="logo"
          />
        </Link>
        <div className={styles.btns}>
          <Link href="/">
            <button
              className={`${styles["btns-btn"]} ${
                isBtnActive && styles["active-btn"]
              }`}
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              className={`${styles["btns-btn"]} ${
                !isBtnActive && styles["active-btn"]
              }`}
            >
              About
            </button>
          </Link>
        </div>
        <button className={styles["menu-icon--btn"]} onClick={handleDropdown}>
          {!isDropdownActive ? (
            <MdMenu className={styles["menu-icon"]} />
          ) : (
            <RxCross1 className={styles["menu-icon"]} />
          )}
        </button>
      </nav>
      <div
        className={`${styles["dropdown-list"]} ${
          isDropdownActive && styles["dropdown-list__active"]
        }`}
      >
        <Link
          className={`${styles["dropdown-list__link"]} ${
            isBtnActive && styles["active-btn"]
          }`}
          href="/"
        >
          <button
            className={styles["dropdown-list__btn"]}
            onClick={handleDropdown}
          >
            Home
          </button>
        </Link>
        <Link
          className={`${styles["dropdown-list__link"]} ${
            !isBtnActive && styles["active-btn"]
          }`}
          href="/about"
        >
          <button
            className={styles["dropdown-list__btn"]}
            onClick={handleDropdown}
          >
            About
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
