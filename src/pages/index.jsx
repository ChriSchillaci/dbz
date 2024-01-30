import { useEffect, useState } from "react";
import CharList from "../components/charList";
import Buttons from "../components/buttons";
import SearchCharacter from "../components/searchCharacter";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?page=1&limit=9")
      .then((res) => res.json())
      .then((data) => setCharData(data.items));
  }, []);

  return (
    <>
      <header className={styles["header-char"]}>
        <div className={styles.rectangle}></div>
        <h1 className={styles.title}>CHARACTERS</h1>
      </header>
      <SearchCharacter />
      <section className={styles["sect-chars"]}>
        <CharList charData={charData} />
        <Buttons />
      </section>
    </>
  );
}
