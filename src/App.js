import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navibar from "./fragments/Navibar";
import TopNav from "./fragments/TopNav";
import Home from "./pages/Home";
import Video from "./pages/Video";
import VideoPlay from "./pages/VideoPlay";
import Post from "./pages/Post";
import Social from "./pages/Social";

function App() {
  return (
    <div>
      <Router>
        <Navibar />
        <TopNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/videoPlay" element={<VideoPlay />} />
          <Route path="/post" element={<Post />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
