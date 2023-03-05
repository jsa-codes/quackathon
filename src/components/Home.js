import React from "react";
import { Container, Typography } from "@mui/material";
import ResultTable from "./ResultTable";

export default function Home({ catArray }) {
  // Testing to see if "catArray" renders correctly
  console.log(catArray);

  return (
    <Container maxWidth="sm">
      <Typography> Home Page </Typography>
      <ResultTable catArray={catArray} />
    </Container>
  );
}
