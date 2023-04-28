import "../styles/VideoCard.css";
import Video_Author from "../assets/video_author.png";

const VideoCard = () => {
    return (
        <div className="video_card">
            <img className="video_cover" src="https://blog.flixel.com/wp-content/uploads/2017/06/Facebook-Cover-Videos.jpg"></img>
            <div className="video_detail">
                <img className="video_au_icon" src={Video_Author}></img>
                <h1 className="video_title">This is a title</h1>
            </div>
            <p className="video_au_name">This is the author name</p>
            <p className="video_au_name">235K views - 1 year ago</p>
        </div>
    )
}

export default VideoCard;