import ProgressBar from 'react-bootstrap/ProgressBar';
import "../styles/Music.css";
import Cover from "../assets/cover.jpg"
import { AiOutlineHeart } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';
import { BsCardList, BsVolumeUp } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { TbPlayerSkipBack, TbPlayerPlay, TbPlayerSkipForward } from 'react-icons/tb';
import { ImLoop, ImProfile } from 'react-icons/im';
import { MdMusicVideo, MdZoomOutMap } from 'react-icons/md';


const Music = () => {
    return (
        <div className="music">
            <img className="cover" src={Cover} alt=''></img>
            <p className="song_title">Song Name</p>
            <p className="artist_name">Jay</p>
            <AiOutlineHeart className="like" />
            <MdAddCircleOutline className="add" />
            <BsCardList className="list" />
            <ProgressBar className="progress" />
            <FaRandom className="random" />
            <TbPlayerSkipBack className="back" />
            <TbPlayerPlay className="play" />
            <TbPlayerSkipForward className="forward" />
            <ImLoop className="loop" />
            <ImProfile className="profile" />
            <MdMusicVideo className="folder" />
            <BsVolumeUp className="volume" />
            <ProgressBar className="volume_control" />
            <MdZoomOutMap className="zoom" />
        </div>
    )
}

export default Music;