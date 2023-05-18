import "../styles/Albums_Cards.css";

const Albums_Cards = () => {
    return (
        <div className="albums_card">
            <img className="albums_cover" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Compact_disc_album.jpg"></img>
            <div className="albums_detail">
                <h1 className="albums_title">This is the author name</h1>
            </div>
            <p className="albums_title">This is a Title </p>
            <p className="albums_au_name">235K views - 1 year ago</p>
        </div>
    )
}

export default Albums_Cards;