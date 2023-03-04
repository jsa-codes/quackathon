import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import React, { useState, useEffect } from "react";
import { getImages } from "./utils";

export default function App() {
  const [catArray, setCatArray] = useState([]);

  useEffect(() => {
    // get the first 20 cats.
    getImages(20, setCatArray);
  }, []);

  console.log(catArray);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home catArray={catArray} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
