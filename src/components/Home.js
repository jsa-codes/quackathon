import React from "react";
import Header from "./Header";
import { Typography, ImageList, ImageListItem } from "@mui/material";

export default function Home({ catArray }) {
  return (
    <div>
      <Header />
      <Typography> Home Page </Typography>
      <ImageList sx={{ width: 750, height: 750 }} cols={5} rowHeight={165}>
        {catArray.map((catObj) => (
          <ImageListItem>
            <img src={`${catObj.image_link}`} loading="lazy" alt="cat" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
