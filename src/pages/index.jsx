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
      .then((data) => {
        if (!inputName) setCharData(data.items);
        else setCharData(data);
      });
  }, [page, inputName]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>CHARACTERS</h1>
      <SearchCharacter inputName={inputName} setInputName={setInputName} />
      <section className={styles["sect-chars"]}>
        <CharList charsData={charsData} />
        {!inputName ? <Buttons page={page} setPage={setPage} /> : null}
      </section>
    </>
  );
}
