import "../styles/UserProfile.css";
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
                <img className="profile_img" src={ProfilePic}></img>
                {user.map(d => (<div>
                    <h1 className="profile_name">{d.username}</h1>
                    <h3 className="profile_account">Email: {d.account}</h3>
                    <p className="profile_type">User type: {d.usertype}</p>
                </div>
                ))}

                <h4 className="profile_num_1">888k</h4>
                <p className="profile_name_1">Follower</p>

                <h4 className="profile_num_2">88</h4>
                <p className="profile_name_2">Composition</p>

                <h4 className="profile_num_3">8m</h4>
                <p className="profile_name_3">Viewer</p>

                <button className="profile_follow">Follow</button>
                <button className="profile_more">+ View more</button>

                <h1 className="bio_title">ABOUT</h1>
                <p className="profile_bio">Emmelie is a traditional book-worm and has always been from a young age.
                    She is a housekeeper mom with two kids and she has a lot of time to read and relax.
                    Emmelie tends to casually browse books in a bookstore but she usually has a hard time finding the
                    right one and spends a lot of time browsing.</p>
            </div>
            <Music />
        </div>

    )
}

export default UserProfile;