import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=4")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photos", error);
      });
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={3} key={photo.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={photo.thumbnailUrl}
                alt={photo.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {photo.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Gallery;
