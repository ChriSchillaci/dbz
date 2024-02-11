import { useEffect, useState } from "react";
import Head from "next/head";
import CharList from "../components/charList";
import Buttons from "../components/buttons";
import SearchCharacter from "../components/searchCharacter";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [charsData, setCharData] = useState([]);
  const [inputName, setInputName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://dragonball-api.com/api/characters?page=${page}&limit=12&name=${inputName}`
    )
      .then((res) => res.json())
      .then((data) => setCharData(data));
  }, [page, inputName]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles["title-wrapper"]}>
        <h1 className={styles.title}>CHARACTERS</h1>
      </header>
      <SearchCharacter inputName={inputName} setInputName={setInputName} />
      <section className={styles["sect-chars"]}>
        {charsData.items?.length || charsData.length ? (
          <CharList charsData={charsData} />
        ) : (
          <p className={styles["empty-char-list"]}>
            COULDN'T FIND ANY CHARACTER
          </p>
        )}
        {!inputName ? (
          <Buttons charsData={charsData} page={page} setPage={setPage} />
        ) : null}
      </section>
    </>
  );
}
