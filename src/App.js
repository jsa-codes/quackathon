import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import React, { useState, useEffect } from "react";

export default function App() {
  const [catObj, setCatObj] = useState([]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/cats", {
          method: "GET",
          headers: { "X-Api-Key": "OqfR/xiDH5FzbG4Dsj8WVA==Y1LlPslook0082vG" },
          contentType: "application/json",
        });
        const catJSON = await response.json();
        setCatObj(catJSON);
      } catch (err) {
        console.error(err);
      }
    }
    getImages();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home catObj={catObj} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
