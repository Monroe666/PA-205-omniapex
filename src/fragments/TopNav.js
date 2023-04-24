import "../styles/TopNav.css";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiMessageRounded } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi'

const TopNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/sign");
    }

    return (
        <div className="top_nav">
            <MdOutlineArrowBackIos className="pre" />
            <MdOutlineArrowForwardIos className="next" />
            <input className="search" type="text" placeholder="Artists,songs or podcasts" />

            <Link to="/sign">
                <FaRegUser className="user" />
            </Link>

            <IoMdNotificationsOutline className="notice" />
            <BiMessageRounded className="chat" />
            <BiLogOut className="logout"
                onClick={handleLogout} />
        </div>
    )
}

export default TopNav;