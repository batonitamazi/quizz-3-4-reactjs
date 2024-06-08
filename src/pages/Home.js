import React from "react";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import { Button, Box } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  const goToGallery = () => {
    navigate("/gallery");
  };
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <ImageComponent />  
      <Button
        variant="contained"
        color="primary"
        onClick={goToGallery}
        sx={{ mt: 2 }}
      >
        Go To Gallery
      </Button>
    </Box>
  );
}

export default Home;
