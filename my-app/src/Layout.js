import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
function Layout() {
  return (
    <div className="Layout">
      Header <br />
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <br />
      Footer
    </div>
  );
}

export default Layout;
