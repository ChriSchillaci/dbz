import Char from "../char";
import styles from "./index.module.scss";

const CharList = ({ charData }) => {
  return (
    <ul className={styles.CharList}>
      {charData.map((char) => (
        <Char char={char} key={char.id} />
      ))}
    </ul>
  );
};

export default CharList;
