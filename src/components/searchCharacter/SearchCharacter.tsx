import { IoSearchOutline } from "react-icons/io5";
import styles from "./index.module.scss";
import { SearchCharacterProps } from "@/types/charTypes";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef } from "react";

const SearchCharacter = ({ inputName, setInputName }: SearchCharacterProps) => {
  const router = useRouter();
  const inputNameRef = useRef<NodeJS.Timeout>(null);

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  useEffect(() => {
    if (inputNameRef.current) {
      clearTimeout(inputNameRef.current);
    }

    inputNameRef.current = setTimeout(() => {
      router.push(`/?name=${inputName}`);
    }, 500);
  }, [inputName]);

  return (
    <form className={styles.SearchCharacter}>
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
