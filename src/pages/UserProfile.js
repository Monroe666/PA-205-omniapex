import "../styles/UserProfile.css";
import Like from "../assets/like.png";
import Create from "../assets/create.png";
import Music from "../fragments/Music"
import ProfilePic from "../assets/profilepic.png";

const UserProfile = () => {
    return (
        <div>
            <div className="home">
                <h1 className="userprofile_title">User Profile</h1>
                <img className="profilepic" src={ProfilePic}></img>
                <h1 className="profile_name">John Alexander</h1>
                <h1 className="profiledesc">Im a big fan of country music</h1>
                <h1 className="list_title">Playlists</h1>
                <button className="like_list"><img className="like_list_img" src={Like}></img>Liked Songs</button>
                <button className="create_list"><img className="create_list_img" src={Create}></img>Create List</button>
            </div>
            <Music />
        </div>

    )
}

export default UserProfile;