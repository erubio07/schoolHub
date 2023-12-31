import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import ContacUs from "./Views/ContacUs/ContacUs";
import Login from "./Views/Login/Login";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContacUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
