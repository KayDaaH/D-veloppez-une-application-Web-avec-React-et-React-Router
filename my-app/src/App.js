import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
