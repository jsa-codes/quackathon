import React from "react";
import Header from "./Header";
import { Typography } from "@mui/material";
import ResultTable from "./ResultTable";

export default function Home({ catArray }) {
  // Testing to see if "catArray" renders correctly
  console.log(catArray);
  return (
    <div>
      <Header />
      <Typography> Home Page </Typography>
      <ResultTable catArray={catArray} />
    </div>
  );
}
