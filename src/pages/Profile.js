import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Profile() {
  const { name } = useParams();
  const displayName = name || "tamazi mirianashvili";

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5awbBO0HmJK2tPBUXrqiTytO_IDsae2lVB_GGDRbu37opqEm3300NEgBxDtwIJ7q2BM&usqp=CAU"
        alt="Hero"
        style={{ maxWidth: "100%" }}
      />
      <Typography variant="h4">Made By {displayName}</Typography>
    </Box>
  );
}

export default Profile;
