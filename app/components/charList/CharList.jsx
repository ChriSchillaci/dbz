import Char from "../Char";
import "./index.scss";

export const CharList = ({ charData }) => {
  return (
    <ul className="CharList">
      {charData.map((char) => (
        <Char char={char} key={char.id} />
      ))}
    </ul>
  );
};
