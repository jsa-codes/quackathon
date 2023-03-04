import React from "react";
import Header from "./Header";
import { Typography } from "@mui/material";
import FavoritesList from "./FavoritesList";
export default function Favorites() {
  return (
    <div>
      <Header />
      <Typography> Favorites Page </Typography>
      <FavoritesList />
    </div>
  );
}
