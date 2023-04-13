import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navibar from "./fragments/Navibar";
import Music from "./fragments/Music";
import TopNav from "./fragments/TopNav";
import Home from "./pages/Home";
import Video from "./pages/Video";
import VideoPlay from "./pages/VideoPlay";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <Router>
        <Navibar />
        <Music />
        <TopNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/videoPlay" element={<VideoPlay />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
