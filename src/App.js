import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import React, { useState, useEffect } from "react";

export default function App() {
  const [catArray, setCatArray] = useState([]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/cats?max_weight=200",
          {
            method: "GET",
            headers: {
              "X-Api-Key": "OqfR/xiDH5FzbG4Dsj8WVA==Y1LlPslook0082vG",
            },
            contentType: "application/json",
          }
        );
        const catJSON = await response.json();
        setCatArray(catJSON);
      } catch (err) {
        console.log(err.message);
      }
    }
    getImages();
  }, []);

  console.log(catArray);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home catArray={catArray} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
