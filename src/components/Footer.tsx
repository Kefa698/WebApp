import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Heading } from "./Typographies";
import { FooterButton } from "./Buttons";

const Footer = () => {
  return (
    <Box sx={{ background: "#031B34", pt: "10%" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "1000px",
            }}
          >
            <Heading
              sx={{
                fontSize: { md: "62px", sm: "50px", xs: "30px" },
                textAlign: "center",
              }}
            >
              Do you want to step in to the future before others
            </Heading>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "4%" }}>
          <FooterButton>Request Early Access</FooterButton>
        </Box>
        <Grid container spacing={2} sx={{ mt: "5%" }}>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
