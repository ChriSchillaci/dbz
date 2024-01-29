import "./index.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchCharacter = () => {
  return (
    <div className="SearchChar">
      <input type="text" placeholder="Search" />
      <IoSearchOutline className="search-icon" />
    </div>
  );
};

export default SearchCharacter;
