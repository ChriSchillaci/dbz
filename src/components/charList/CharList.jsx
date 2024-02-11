import Char from "../char";
import styles from "./index.module.scss";

const CharList = ({ charsData }) => {
  return (
    <ul className={styles.CharList}>
      {charsData.items
        ? charsData.items.map((char) => <Char char={char} key={char.id} />)
        : charsData.map((char) => <Char char={char} key={char.id} />)}
    </ul>
  );
};

export default CharList;
