import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./page/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;