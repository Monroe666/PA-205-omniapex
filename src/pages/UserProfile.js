import "../styles/UserProfile.css";
import Music from "../fragments/Music"
import { useEffect, useState } from "react";
import EditName from "../popup/EditName";
import EditBio from "../popup/EditBio";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    let email = localStorage.getItem("account");

    let content = 'Congratulations! profile picture modified successfully!';

    useEffect(() => {
        fetch("http://localhost:3001/user/" + email)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err));
    }, [])

    const [file, setFile] = useState();

    const handleFile = (e) => {
        console.log(file);
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post("http://localhost:3001/upload/" + email, formdata);

        axios.post("http://localhost:3001/notice", {
            email,
            content,
        });

        alert('Congratulations! profile picture modified successfully!');
        navigate("/");
    }

    const [editName, setEditName] = useState("close");

    const openEditName = () => {
        switch (editName) {
            case "close":
                setEditName("open");
                return;
            case "open":
                setEditName("close");
                return;
            default:
                setEditName("close");
                return;
        }
    }

    const [editBio, setEditBio] = useState("close");

    const openEditBio = () => {
        switch (editBio) {
            case "close":
                setEditBio("open");
                return;
            case "open":
                setEditBio("close");
                return;
            default:
                setEditBio("close");
                return;
        }
    }

    return (
        <div>
            <div className="home">

                <input className="add_picture_btn" type="file" onChange={handleFile} />
                <button className="upload_picture_btn" onClick={handleUpload}>Upload</button>

                {user.map(d => (<div>
                    <img className="profile_img" src={"http://localhost:3001/images/" + d.picture} alt=""></img>
                    <h1 className="profile_name">{d.username}</h1>
                    <button className="edit_name_btn" onClick={() => openEditName()}>Edit</button>
                    <EditName popStatus={editName} />

                    <h3 className="profile_account">Email: {d.account}</h3>
                    <p className="profile_type">User type: {d.usertype}</p>
                    <p className="profile_bio">{d.bio}</p>
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

                <button className="edit_bio_btn" onClick={() => openEditBio()}>Edit</button>
                <EditBio popStatus={editBio} />
            </div>
            <Music />
        </div>

    )
}

export default UserProfile;