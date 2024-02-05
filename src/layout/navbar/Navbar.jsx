import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <img
        className={styles["logo-img"]}
        src="https://s3-alpha-sig.figma.com/img/f28e/7d69/782b92e3b7da64810c97f006f9b1451f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBs1z67F-0E3-Y1JozBLXnPFVjU4kMpBhO63shx3HsZS~sGBWu5bszkILXDwN4H~-wmJ7dqit2KaNyYH2e5IajAd0MAeD~ih--XY0uPzNklK5QXsLjErNAPYnN~2PQDgkwsnLWEdrSgC2iyW8FKz9ccKH6CQcI57nvjzQqq-LHv25rtTb~djgiC~HUQjbsHXfS3itd7DqDrOzkgiSJRZRBHABF45dR7J5E~Vf1-eX~FyGavQPlYa7aEhu4ksjHxNQJoLEYsS1R3-CIbdPG1DwLgje0C5WdRsPpDaORj-wVmY2ejs1Se24BkelhE4~V5PFv5Iau1jVv1ulNTl52YJgQ__"
        alt="logo"
      />
      <div className={styles.btns}>
        <button className={`${styles["btns-btn"]} ${styles["home-btn"]}`}>
          Home
        </button>
        <button className={`${styles["btns-btn"]} ${styles["about-btn"]}`}>
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;