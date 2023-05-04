import "../styles/TopNav.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { useSearch } from "./useSearch";

const TopNav = () => {
  const { searchResults, handleSearch } = useSearch();
  const [isFocused, setIsFocused] = useState(false);
  const loggedin = localStorage.getItem("loggedin") || false;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/sign");
  };

  return (
    <div className="top_nav">
      <MdOutlineArrowBackIos className="pre" />
      <MdOutlineArrowForwardIos className="next" />
      <input
        className="search"
        type="text"
        placeholder="Artists,songs or podcasts"
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {loggedin ? (
        <Link to="/userprofile">
          <FaRegUser className="user" />
        </Link>
      ) : (
        <Link to="/sign">
          <FaRegUser className="user" />
        </Link>
      )}
      <IoMdNotificationsOutline className="notice" />
      <Link to="/messaging">
        <BiMessageRounded className="chat" />
      </Link>
      <BiLogOut className="logout" onClick={handleLogout} />

      {isFocused && searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopNav;
