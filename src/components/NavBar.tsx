import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const NavBar = () => {
  return (
    <Box>
      <AppBar sx={{ background: "#040C18" }}>
        <Toolbar>
          <Container maxWidth="xl">
            {" "}
            <ConnectWallet />
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
