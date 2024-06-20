import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { useState } from "react";
import Head from "next/head";
import CharList from "../components/charList";
import Buttons from "../components/buttons";
import SearchCharacter from "../components/searchCharacter";
import styles from "../styles/Home.module.scss";
import { CharData, CharDataItems } from "@/types/charTypes";

export const getServerSideProps = (async (context) => {
  const { page = 1, name = "" } = context.query;
  let charsData: CharDataItems<CharData[]> = { items: [] };
  let charsDataName: CharData[] = [];

  const res = await fetch(
    `https://dragonball-api.com/api/characters?page=${page}&limit=12&name=${name}`
  );

  const data: CharDataItems<CharData[]> | CharData[] = await res.json();

  try {
    if ("items" in data) {
      charsData = data;
    } else {
      charsDataName = data;
    }

    if (charsData.statusCode === 404) {
      throw new Error();
    }

    return {
      props: { charsData, charsDataName, page },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<{
  charsData: CharDataItems<CharData[]>;
  charsDataName: CharData[];
  page: number | string | string[];
}>;

export default function Home({
  charsData,
  charsDataName,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [inputName, setInputName] = useState("");

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
        {charsData.items ? <CharList charsData={charsData.items} /> : ""}

        {charsDataName.length || !inputName ? (
          <CharList charsData={charsDataName} />
        ) : (
          ""
        )}

        {!charsDataName.length && !charsData.items.length && (
          <p className={styles["empty-char-list"]}>
            COULDN'T FIND ANY CHARACTER
          </p>
        )}

        {!inputName && <Buttons charsData={charsData} page={page} />}
      </section>
    </>
  );
}
