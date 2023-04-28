import "../styles/TopNav.css";
import { useState } from "react";
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

    const [isNotifiOpen, setNotifiOpen] = useState(false);

    return (
        <div className="top_nav">
            <MdOutlineArrowBackIos className="pre" />
            <MdOutlineArrowForwardIos className="next" />
            <input className="search" type="text" placeholder="Artists,songs or podcasts" />

            <Link to="/sign">
                <FaRegUser className="user" />
            </Link>

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
            
            <BiMessageRounded className="chat" />
            <BiLogOut className="logout"
                onClick={handleLogout} />
        </div>
    )
}

export default TopNav;