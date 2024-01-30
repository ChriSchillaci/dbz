import { IoSearchOutline } from "react-icons/io5";
import styles from "./index.module.scss";

const SearchCharacter = () => {
  return (
    <div className={styles.SearchCharacter}>
      <input
        className={styles["SearchCharacter-input"]}
        type="text"
        placeholder="Search"
      />
      <IoSearchOutline className={styles["search-icon"]} />
    </div>
  );
};

export default SearchCharacter;
