import { useEffect, useState } from "react";
import CharList from "../components/charList";
import Buttons from "../components/buttons";
import SearchCharacter from "../components/searchCharacter";
import styles from "../styles/Home.module.scss";

export const metadata = {
  title: "Home",
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://dragonball-api.com/api/characters?page=1&limit=9"
//   );
//   const data = await res.json();

//   return {
//     props: { charsData: data.items },
//   };
// };

export default function Home(/*{ charsData }*/) {
  const [charsData, setCharData] = useState([]);
  const [inputName, setInputName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://dragonball-api.com/api/characters?page=${page}&limit=9&name=${inputName}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!inputName) setCharData(data.items);
        else setCharData(data);
      });
  }, [page, inputName]);

  return (
    <>
      <header className={styles["header-char"]}>
        <div className={styles.rectangle}></div>
        <h1 className={styles.title}>CHARACTERS</h1>
      </header>
      <SearchCharacter inputName={inputName} setInputName={setInputName} />
      <section className={styles["sect-chars"]}>
        <CharList charsData={charsData} />
        {!inputName ? <Buttons page={page} setPage={setPage} /> : null}
      </section>
    </>
  );
}
