import "../styles/UserProfile.css";
import Like from "../assets/like.png";
import Create from "../assets/create.png";
import Music from "../fragments/Music"
import ProfilePic from "../assets/profilepic.png";
import { useEffect, useState } from "react";

const UserProfile = () => {

    const [user, setUser] = useState([]);

    let email = localStorage.getItem("account");

    useEffect(() => {
        fetch("http://localhost:3001/user/" + email)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <div className="home">
                <h1 className="userprofile_title">User Profile</h1>
                <img className="profilepic" src={ProfilePic}></img>
                {user.map(d => (<div>
                    <h1 className="profile_account">Account: {d.account}</h1>
                    <p className="profile_name">Name: {d.username}</p>
                    <p className="profile_type">Type: {d.usertype}</p>
                </div>
                ))}
                <h1 className="list_title">Playlists</h1>
                <button className="like_list"><img className="like_list_img" src={Like}></img>Liked Songs</button>
                <button className="create_list"><img className="create_list_img" src={Create}></img>Create List</button>
            </div>
            <Music />
        </div>

    )
}

export default UserProfile;