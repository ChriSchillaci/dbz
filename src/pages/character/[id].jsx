import CharInfo from "@/components/charInfo";
import Transformation from "@/components/transformation";
import Head from "next/head";
import { RiTeamFill } from "react-icons/ri";
import { GiAura, GiBeamsAura } from "react-icons/gi";
import styles from "../../styles/Character.module.scss";

export const getStaticPaths = async () => {
  const res = await fetch("https://dragonball-api.com/api/characters?limit=58");
  const character = await res.json();

  const paths = character.items.map((char) => ({
    params: { id: char.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  const data = await res.json();

  return {
    props: { charData: data },
  };
};

export default function Character({ charData }) {
  return (
    <>
      <Head>
        <title>{charData.name}</title>
      </Head>
      <div className={styles["char-container"]}>
        <img
          className={styles["bg-img"]}
          src="https://s3-alpha-sig.figma.com/img/14e8/b2f1/9ebfef3da7a08bd46b30ed25fd490320?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y464MMDO0RNZ6h2YL1fgy2KSbb-k8MGmoUS93DFCK20DePKGhGAmzFX0VlC85D-RAC0woTSih3sPzDr6BzWV0DtCuQtREmS6ZCDARny8tMdiN2i409Vs3x65ZgGzFmFVmrQbuhMF3mHPLexVPF9w764t2x95N0cU-qtd~nwIHbTY6vPDI6I3LsEAGLPssgFxgByg3cfWpvK2GBZlULeG5KuP97z0d-dRt8UIRvJChoOGIR-BqF8Symml4ehkzpA4I09srF3HyhzU6YavE5dwU1eRmZoxM~rgfXCrSPlgM2erm4bdIsmQiSHsZXMLgQTd3K7CKt0XmaiH8j~lluOZYQ__"
        />
        <img
          className={styles["char-img"]}
          src={charData.image}
          alt={charData.name}
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
