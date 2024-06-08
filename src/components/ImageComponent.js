import React from "react";
import { Box, Typography } from "@mui/material";

function ImageComponent() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <img
        src="https://wallpapersmug.com/download/800x600/7a22c5/forest_mountains_sunset_cool_weather_minimalism.jpg"
        alt="Hero"
        style={{ maxWidth: "100%" }}
      />
      <Typography variant="h4" component="div" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

export default ImageComponent;
