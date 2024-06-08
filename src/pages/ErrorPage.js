// src/pages/ErrorPage.js
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(8),
}));

const ErrorPage = () => {
  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        Sorry, the page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        Go to Home
      </Button>
    </StyledContainer>
  );
};

export default ErrorPage;
