import "../styles/Post.css";
import Post_1 from "../assets/post_1.png";
import Post_2 from "../assets/post_2.png";
import Post_3 from "../assets/post_3.png";
import Post_4 from "../assets/post_4.png";
import Post_5 from "../assets/post_5.png";
import Post_6 from "../assets/post_6.png";

const Post = () => {
    return (
        <div className="home">
            <h1 className="post_title">What’s Going In World!!!!!</h1>
            <img className="post_1" src={Post_1} alt=""></img>
            <img className="post_2" src={Post_2} alt=""></img>
            <img className="post_3" src={Post_3} alt=""></img>
            <p className="poster">My Story</p>
            <h1 className="post_title1">Artist’s Stories</h1>
            <img className="post_4" src={Post_4} alt=""></img>
            <img className="post_5" src={Post_5} alt=""></img>
            <img className="post_6" src={Post_6} alt=""></img>
            <p className="poster1">Justin Bieber</p>
        </div>
    )
}

export default Post;