import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import ContacUs from "./Views/ContacUs";
import Login from "./Views/Login";

function App() {
  return (
    <div className="App">
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
