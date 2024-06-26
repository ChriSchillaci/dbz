import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import CharInfo from "@/components/charInfo";
import Transformation from "@/components/transformation";
import Head from "next/head";
import Image from "next/image";
import { RiTeamFill } from "react-icons/ri";
import { GiAura, GiBeamsAura } from "react-icons/gi";
import styles from "../../styles/Character.module.scss";
import { CharData } from "@/types/charTypes";

export const getStaticPaths = (async () => {
  const res = await fetch("https://dragonball-api.com/api/characters?limit=58");
  const character: { items: { id: string }[] } = await res.json();

  const paths = character.items.map((char) => ({
    params: { id: char.id.toString() },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  const data: CharData = await res.json();

  try {
    if (data.statusCode === 404 || data.statusCode === 400) {
      throw new Error();
    }

    return {
      props: { charData: data },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
}) satisfies GetStaticProps<{ charData: CharData }>;

export default function Character({
  charData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{charData.name}</title>
      </Head>
      <div className={styles["char-container"]}>
        <Image
          className={styles["bg-img"]}
          src="/images/bg-stage.png"
          alt="bg-stage"
          height={1080}
          width={1920}
          quality={80}
        />
        <Image
          className={styles["char-img"]}
          src={charData.image}
          alt={charData.name}
          height={1080}
          width={1920}
          quality={80}
        />
        <ul className={styles.stats}>
          <li className={styles["stat-wrapper"]}>
            <GiAura className={styles["stat-icon"]} />
            <p>
              <span className={styles["stat-name"]}>KI - </span>
              {charData.ki}
            </p>
          </li>
          <li className={styles["stat-wrapper"]}>
            <GiBeamsAura className={styles["stat-icon"]} />
            <p>
              <span className={styles["stat-name"]}>MAXKI - </span>
              {charData.maxKi}
            </p>
          </li>
          <li className={styles["stat-wrapper"]}>
            <RiTeamFill className={styles["stat-icon"]} />
            <p>
              <span className={styles["stat-name"]}>AFFILIATION - </span>
              {charData.affiliation}
            </p>
          </li>
        </ul>
      </div>
      <div className={styles["info-wrapper"]}>
        <CharInfo charData={charData} />
        {charData.transformations.length ? (
          <Transformation charData={charData} />
        ) : null}
      </div>
    </>
  );
}
