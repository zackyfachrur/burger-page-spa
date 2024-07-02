import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Food from "./pages/Food.jsx";
import Contact from "./pages/Contact.jsx";
import Submit from "./pages/Submit.jsx";
import { InfinitySpin } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import ChefLoading from "./img/chef-home.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 80 + "%",
          flexDirection: "row",
          height: 100 + "vh",
        }}
      >
        <img
          src={ChefLoading}
          alt=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: 150 + "px",
          }}
        />
        <InfinitySpin
          visible={true}
          width="200"
          color="black"
          ariaLabel="infinity-spin-loading"
        />
      </main>
    );
  };

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/submit" element={<Submit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
