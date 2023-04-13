import "../styles/Video.css";
import Video_1 from "../assets/video_1.png";
import Video_2 from "../assets/video_2.png";
import Video_3 from "../assets/video_3.png";
import Video_4 from "../assets/video_4.png";
import Video_5 from "../assets/video_5.png";
import { Link } from "react-router-dom";
import Image_1 from "../assets/img_1.png";
import Image_2 from "../assets/img_2.png";
import Image_3 from "../assets/img_3.png";

const Video = () => {
    return (
        <div className="home">
            <h1 className="home_title">Short videos</h1>
            <Link to="/videoPlay">
                <img className="video_1" src={Video_1}></img>
                <p className="video_d">Video Details</p>
                <p className="video_v">1 million views</p>
                <img className="video_2" src={Video_2}></img>
                <img className="video_3" src={Video_3}></img>
                <img className="video_4" src={Video_4}></img>
                <img className="video_5" src={Video_5}></img>
            </Link>
            <h1 className="img_title">Images</h1>
            <img className="img_1" src={Image_1}></img>
            <img className="img_2" src={Image_2}></img>
            <img className="img_3" src={Image_3}></img>
        </div>
    )
}

export default Video;