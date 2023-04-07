import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navibar from "./fragments/Navibar";
import Music from "./fragments/Music";
import TopNav from "./fragments/TopNav";
import Home from "./pages/Home";
import Video from "./pages/Video";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
