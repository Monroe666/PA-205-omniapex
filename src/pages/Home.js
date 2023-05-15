import "../styles/Home.css";
import "../pages/Albums.js"
import Like from "../assets/like.png";
import Create from "../assets/create.png";
import Music from "../fragments/Music"

const Home = () => {
    return (
        <div>
            <div className="home">
                <h1 className="home_title">Streaming music now!</h1>
                <button className="artist">Artist</button>
                <button className="album" a href="Albums.js">Album</button>
                <button className="genre">Genre</button>
                <h1 className="list_title">Playlists</h1>
                <button className="like_list"><img className="like_list_img" src={Like}></img>Liked Songs</button>
                <button className="create_list"><img className="create_list_img" src={Create}></img>Create List</button>
            </div>
            <Music />
        </div>

    )
}

export default Home;