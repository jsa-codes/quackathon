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
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
      <Typography> Home Page </Typography>
      <ResultTable catArray={catArray} />
    </div>
  );
}
