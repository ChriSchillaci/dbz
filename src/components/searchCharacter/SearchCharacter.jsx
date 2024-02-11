import { IoSearchOutline } from "react-icons/io5";
import styles from "./index.module.scss";

const SearchCharacter = ({ inputName, setInputName }) => {
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.SearchCharacter}
    >
      <input
        className={styles["SearchCharacter-input"]}
        type="text"
        placeholder="Search"
        value={inputName}
        onChange={handleInputName}
      />
      <button className={styles["search-btn"]}>
        <IoSearchOutline className={styles["search-icon"]} />
      </button>
    </form>
  );
};

export default SearchCharacter;
