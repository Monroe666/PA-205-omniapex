import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditName = (props) => {
    const navigate = useNavigate();

    let email = localStorage.getItem("account");

    let content = 'Congratulations! Name modified successfully!'

    const [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value);
    };

    const confirm = () => {
        Axios.post("http://localhost:3001/name", {
            name,
            email,
        });

        Axios.post("http://localhost:3001/notice", {
            email,
            content,
        });
        alert('Congratulations! Name modified successfully!');
        navigate("/");
    }

    return (
        <>
            {props.popStatus === "open" ?
                <div className="edit_bio">
                    <h1 className="edit_bio_title">Edit Name</h1>
                    <input className="edit_name_input" name="name" onChange={handleChange} value={name} />
                    <button className="edit_bio_confirm" onClick={confirm}>Confirm</button>
                </div>
                : ""
            }
        </>
    )
}

export default EditName;