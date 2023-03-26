import "../styles/Header.css";
import Logo from "../assets/Omniapex.jpg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <Link to="/">
                    <img className="logo" src={Logo}></img>
                </Link>
                <h2 className="header_title">Omniapex</h2>
                <p className="header_subTitle">Music Streaming Platform</p>
            </div>
            <div className="header_right">
                <ul>
                    <Link to="/signin">
                        <li className="header_link1">Create New Account</li>
                    </Link>
                    <li className="header_link2">Log In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;