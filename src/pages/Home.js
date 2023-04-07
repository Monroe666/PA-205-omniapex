import "../styles/Home.css";
import Like from "../assets/like.png"
import Create from "../assets/create.png"

const Home = () => {
    return (
        <div className="home">
            <h1 className="home_title">Streaming music now!</h1>
            <button className="artist">Artist</button>
            <button className="album">Album</button>
            <button className="genre">Genre</button>
            <h1 className="list_title">Playlists</h1>
            <button className="like_list"><img className="like_list_img" src={Like}></img>Liked Songs</button>
            <button className="create_list"><img className="create_list_img" src={Create}></img>Create List</button>
        </div>
    )
}

export default Home;