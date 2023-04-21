import "../styles/Social.css";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

const Social = () => {
    return (
        <div className="home">
            <h1 className="social_title">What do you want to share?</h1>
            <button className="artist_1">Songs</button>
            <button className="album_1">Playlists</button>
            <button className="genre_1">Stories</button>
            <h1 className="social_subtitle">Choose sharing platform</h1>

            <a href="https://www.facebook.com/" target="blank">
                <button className="fb">CONTINUE WITH FACEBOOK</button>
                <SlSocialFacebook className="fb_icon" />
            </a>

            <a href="https://www.instagram.com/" target="blank">
                <button className="in">CONTINUE WITH INSTAGRAM</button>
                <SlSocialInstagram className="in_icon" />
            </a>

            <a href="https://www.twitter.com/" target="blank">
                <button className="tw">CONTINUE WITH TWITTER</button>
                <SlSocialTwitter className="tw_icon" />
            </a>
        </div>
    )
}

export default Social;