import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          quizz 3-4
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/gallery">
            Gallery
          </Button>
          <Button color="inherit" component={Link} to="/profile/tamazi">
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
