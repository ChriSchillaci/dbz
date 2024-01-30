import styles from "./index.module.scss";

const Char = ({ char }) => {
  return (
    <li className={styles.Char} id={char.id}>
      <img className={styles["Char-img"]} src={char.image} alt={char.name} />
      <p className={styles.name}>{char.name}</p>
    </li>
  );
};

export default Char;
