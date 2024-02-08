import styles from "./index.module.scss";

const CharInfo = ({ charData }) => {
  return (
    <section className={styles["char-sect"]}>
      <div className={styles["char-info"]}>
        <h1 className={styles.name}>{charData.name.toUpperCase()}</h1>
        <h3 className={styles["race-gender"]}>
          {charData.race} - {charData.gender}
        </h3>
        <p className={styles.text}>{charData.description}</p>
      </div>
      <div className={styles["char-planet"]}>
        <img
          className={styles["planet-img"]}
          src={charData.originPlanet.image}
          alt={charData.originPlanet.name}
        />
        <div className={styles["planet-info"]}>
          <h1 className={styles["planet-title"]}>
            Original Planet - {charData.originPlanet.name}
          </h1>
          <p className={styles["planet-text"]}>
            {charData.originPlanet.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharInfo;
