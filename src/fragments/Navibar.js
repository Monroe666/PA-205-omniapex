import React, { useState } from "react";
import "../styles/Navibar.css";
import Logo from "../assets/logo.png"
import { BsThreeDots, BsCameraVideo } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { TbShare3, TbWorldUpload } from 'react-icons/tb';
import { Link } from "react-router-dom";


const Navibar = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    return (
        <div>
            <nav className={isNavOpen ? "nav_open" : "nav_closed"}>
                <Link to="/">
                    <img className="logo" src={Logo}></img>
                </Link>
                <BsThreeDots className="expand" onClick={() => setNavOpen(!isNavOpen)} />
                <Link to="/">
                    <FiHome className="home_icon" />
                    <p className={isNavOpen ? "description1" : "hide"}>Home</p>
                </Link>

                <Link to="/video">
                    <BsCameraVideo className="video_icon" />
                    <p className={isNavOpen ? "description2" : "hide"}>Video</p>
                </Link>

                <TbWorldUpload className="post" />
                <p className={isNavOpen ? "description3" : "hide"}>Story</p>
                <TbShare3 className="share" />
                <p className={isNavOpen ? "description4" : "hide"}>Social</p>
            </nav>
        </div>
    )
}

export default Navibar;