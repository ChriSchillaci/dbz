import "./index.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchChar = () => {
  return (
    <div className="SearchChar">
      <input type="text" placeholder="Search" />
      <IoSearchOutline className="search-icon" />
    </div>
  );
};

export default SearchChar;
