import React from "react";
import { Typography, Box } from "@mui/material";
import { BottomNavigation } from "@mui/material";

function Footer() {
  return (
    <BottomNavigation
      sx={{ textAlign: "center", py: 2, mt: 4, backgroundColor: "#f1f1f1" }}
    >
      <Typography variant="body2">
        &copy; All rights reserved {new Date().getFullYear()}
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
