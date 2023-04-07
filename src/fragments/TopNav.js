import "../styles/TopNav.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiMessageRounded } from 'react-icons/bi';

const TopNav = () => {
    return (
        <div className="top_nav">
            <MdOutlineArrowBackIos className="pre" />
            <MdOutlineArrowForwardIos className="next" />
            <input className="search" type="text" placeholder="Artists,songs or podcasts" />
            <FaRegUser className="user" />
            <IoMdNotificationsOutline className="notice" />
            <BiMessageRounded className="chat" />
        </div>
    )
}

export default TopNav;