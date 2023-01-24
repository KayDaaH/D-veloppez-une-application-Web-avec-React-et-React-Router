import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import styles from "./App.scss";
import Property from "./pages/Property/Property";
import { DataContext } from "./components/DataContext";
import { useEffect, useState } from "react";
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("./data.json")
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    getData();
  }, []);

  return (
    <div className={styles.app}>
      <DataContext.Provider value={data}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
