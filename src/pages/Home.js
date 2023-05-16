import "../styles/Home.css";
import Like from "../assets/like.png";
import Create from "../assets/create.png";
import Music from "../fragments/Music"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="home">
                <h1 className="home_title">Streaming music now!</h1>
                <button className="artist">Artist</button>
                <Link to="/Albums">
                <button className="album">Album</button>
                </Link>
                <button className="genre">Genre</button>
                <h1 className="list_title">Playlists</h1>
                <button className="like_list"><img className="like_list_img" src={Like} alt=""></img>Liked Songs</button>
                <button className="create_list"><img className="create_list_img" src={Create} alt=""></img>Create List</button>
            </div>
            <Music />
        </div>
    )
}

export default Home;