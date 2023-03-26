import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./fragments/Header"
import Footer from "./fragments/Footer";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
