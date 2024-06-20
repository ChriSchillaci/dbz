import { useEffect, useState } from "react";
import Link from "next/link";
import { socialIcons } from "@/mocks/social-icons";
import styles from "./index.module.scss";
import { CharDataItems, CharType } from "@/types/charTypes";

const Footer = () => {
  const [charName, setCharName] = useState<CharType[]>([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=58")
      .then((res) => res.json())
      .then((data: CharDataItems<CharType[]>) => setCharName(data.items));
  }, []);

  return (
    <footer className={styles.Footer}>
      <div className={styles["Footer-wrapper"]}>
        <div className={styles.info}>
          <div className={styles["img-text"]}>
            <img
              className={styles["ball-img"]}
              src="/images/dragon-sphere.png"
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
