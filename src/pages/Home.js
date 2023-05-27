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
                
                <Link to="/artist">
                <button className="artist_btn">Artist</button>
                </Link>


                

                <Link to="/album">
                    <button className="albums">Album</button>
                </Link>


                <Link to="/genre">
                <button className="genre">Genre</button>
                </Link>

                

                
                <h1 className="list_title">Playlists</h1>
                <button className="like_list"><img className="like_list_img" src={Like} alt=""></img>Liked Songs</button>
                <button className="create_list"><img className="create_list_img" src={Create} alt=""></img>Create List</button>
            </div>
            <Music />
        </div>
    )
}

export default Home;