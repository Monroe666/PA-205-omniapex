import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditBio = (props) => {
    const navigate = useNavigate();

    let email = localStorage.getItem("account");

    let content = 'Congratulations! About modified successfully!';

    const [bio, setBio] = useState('');

    const handleChange = event => {
        setBio(event.target.value);
    };

    const confirm = () => {
        Axios.post("http://localhost:3001/bio", {
            bio,
            email,
        });

        Axios.post("http://localhost:3001/notice", {
            email,
            content,
        });
        alert('Congratulations! About modified successfully!');
        navigate("/");
    }

    return (
        <>
            {props.popStatus === "open" ?
                <div className="edit_bio">
                    <h1 className="edit_bio_title">Edit About</h1>
                    <textarea className="edit_bio_input" rows={5} cols={40}
                        name="bio" onChange={handleChange} value={bio} />
                    <button className="edit_bio_confirm" onClick={confirm}>Confirm</button>
                </div>
                : ""
            }
        </>
    )
}

export default EditBio;