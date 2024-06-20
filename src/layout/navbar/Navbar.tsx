import { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import styles from "./index.module.scss";
import { NavbarProps } from "@/types/charTypes";

const Navbar = ({ isBtnActive, currentPage }: NavbarProps) => {
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
            src="/images/dragon-sphere.png"
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
