import { useEffect, useState } from "react";
import Link from "next/link";
import { socialIcons } from "@/mocks/social-icons";
import styles from "./index.module.scss";

const Footer = () => {
  const [charName, setCharName] = useState([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=58")
      .then((res) => res.json())
      .then((data) => setCharName(data.items));
  }, []);

  return (
    <footer className={styles.Footer}>
      <div className={styles["Footer-wrapper"]}>
        <div className={styles.info}>
          <div className={styles["img-text"]}>
            <img
              className={styles["ball-img"]}
              src="https://s3-alpha-sig.figma.com/img/f28e/7d69/782b92e3b7da64810c97f006f9b1451f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBs1z67F-0E3-Y1JozBLXnPFVjU4kMpBhO63shx3HsZS~sGBWu5bszkILXDwN4H~-wmJ7dqit2KaNyYH2e5IajAd0MAeD~ih--XY0uPzNklK5QXsLjErNAPYnN~2PQDgkwsnLWEdrSgC2iyW8FKz9ccKH6CQcI57nvjzQqq-LHv25rtTb~djgiC~HUQjbsHXfS3itd7DqDrOzkgiSJRZRBHABF45dR7J5E~Vf1-eX~FyGavQPlYa7aEhu4ksjHxNQJoLEYsS1R3-CIbdPG1DwLgje0C5WdRsPpDaORj-wVmY2ejs1Se24BkelhE4~V5PFv5Iau1jVv1ulNTl52YJgQ__"
              alt="Ball"
            />
            <p className={styles.text}>DRAGON BALL</p>
          </div>
          <ul className={styles["social-icons"]}>
            {socialIcons.map((icon, idx) => (
              <li key={idx}>
                <Link href={icon.link}>{icon.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["chars-pages"]}>
          <div className={styles.chars}>
            <h3 className={styles["chars-title"]}>CHARACTERS</h3>
            <ul className={styles["chars-names"]}>
              {charName.map((char) => (
                <li className={styles.name} key={char.id}>
                  <Link href={`/character/${char.id}`}>{char.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.pages}>
            <h3 className={styles["pages-title"]}>Pages</h3>
            <div className={styles.links}>
              <Link href="/">
                <h4>Home</h4>
              </Link>
              <Link href="/about">
                <h4>About</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.developer}>Made By Schillaci Christian - 2024</div>
    </footer>
  );
};

export default Footer;
