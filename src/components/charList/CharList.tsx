import Char from "../char";
import styles from "./index.module.scss";
import { CharData } from "@/types/charTypes";

const CharList = ({ charsData }: { charsData: CharData[] }) => {
  return (
    <ul className={styles.CharList}>
      {charsData.map((char) => (
        <Char char={char} key={char.id} />
      ))}
    </ul>
  );
};

export default CharList;
