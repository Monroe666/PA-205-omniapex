import "../styles/VideoPlay.css";
import Video_Play from "../assets/video_play.png";
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Video_Author from "../assets/video_author.png";

const VideoPlay = () => {
    return (
        <div className="home">
            <img className="video_play" src={Video_Play} alt=""></img>
            <div className="video_action">
                <AiOutlineLike className="line_like" />
                <AiOutlineDislike className="line_dislike" />
                <BiCommentDetail className="comment" />
                <AiOutlineShareAlt className="share_video" />
                <FiMoreHorizontal className="more" />
            </div>
            <p className="video_des">Home video | Movements | Dancing in the rain #shorts #Shorts tiktok</p>
            <img className="author" src={Video_Author} alt=""></img>
            <p className="video_author">SADEK Tuts</p>
        </div>
    )
}

export default VideoPlay;