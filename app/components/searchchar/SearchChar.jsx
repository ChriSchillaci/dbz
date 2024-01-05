import "./index.css"
import { IoSearchOutline } from "react-icons/io5";

const SearchChar = () => {
  return (
    <div className='SearchChar'>
        <input type="text" placeholder="Search" />
        <IoSearchOutline />
    </div>
  )
}

export default SearchChar