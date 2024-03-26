import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Food from "./pages/Food.js"
import Contact from "./pages/Contact.js"
import Submit from "./pages/Submit.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/submit" element={<Submit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
