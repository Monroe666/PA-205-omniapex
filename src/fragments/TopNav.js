import "../styles/TopNav.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import useSearch from "./useSearch";


const TopNav = () => {
  const { searchResults, handleSearch, query } = useSearch();

  const [isFocused, setIsFocused] = useState(false);

  const [loggedin, setLoggedin] =
    useState(localStorage.getItem("loggedin") || false);

  const navigate = useNavigate();

  const [isNotifiOpen, setNotifiOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("account");
    localStorage.removeItem("loggedin");
    setLoggedin(false);
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

      <IoMdNotificationsOutline className="notice" onClick={() => setNotifiOpen(!isNotifiOpen)} />
      <div className={isNotifiOpen ? "boxOpen" : "notifi_box"}>
        <h2 className="notifi_title">Notification <span className="notifi_amount">1</span></h2>
        <div className="notifi_item">
          <div className="text">
            <h4>A</h4>
            <p>Hello!</p>
          </div>
        </div>
      </div>

      <Link to="/messaging">
        <BiMessageRounded className="chat" />
      </Link>

      <BiLogOut className="logout" onClick={handleLogout} />

      {isFocused && (
        <ul className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))
          ) : query.length === 0 ? (
            <li>None</li>
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default TopNav;
