import "../styles/Video.css";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

const Video = () => {
    return (
        <Link to="/videoPlay">
            <div className="video">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </Link>
    )
}

export default Video;