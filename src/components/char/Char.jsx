import Link from "next/link";
import styles from "./index.module.scss";

const Char = ({ char }) => {
  return (
    <li className={styles.Char} id={char.id}>
      <Link href={`character/${char.id}`}>
        <img className={styles["img-hover"]} src="/images/lines-effect.png" />
        <img className={styles["Char-img"]} src={char.image} alt={char.name} />
        <p className={styles.name}>{char.name}</p>
      </Link>
    </li>
  );
};

export default Char;
