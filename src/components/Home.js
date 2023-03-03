import React from "react";
import Header from "./Header";
import { Typography } from "@mui/material";

export default function Home({ catObj }) {
  return (
    <div>
      <Header />
      <Typography> Home Page </Typography>
    </div>
  );
}
