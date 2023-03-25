import "../styles/Header.css";
import Logo from "../assets/Omniapex.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img className="logo" src={Logo}></img>
                <h2 className="header_title">Omniapex</h2>
                <p className="header_subTitle">Music Streaming Platform</p>
            </div>
            <div className="header_right">
                <ul>
                    <li className="header_link1"><a></a>Create New Account</li>
                    <li className="header_link2"><a></a>Log In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;