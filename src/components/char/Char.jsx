import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const Char = ({ char }) => {
  return (
    <li className={styles.Char} id={char.id}>
      <Link href={`character/${char.id}`}>
        <Image
          className={styles["img-hover"]}
          src="/images/lines-effect.png"
          alt="lines"
          height={1080}
          width={1920}
          quality={80}
        />
        <Image
          className={styles["Char-img"]}
          src={char.image}
          alt={char.name}
          height={1080}
          width={1920}
          quality={80}
        />
        <p className={styles.name}>{char.name}</p>
      </Link>
    </li>
  );
};

export default Char;
