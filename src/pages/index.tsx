import Head from "next/head";
import Image from "next/image";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import { GeneralTypo, Heading } from "@/components/Typographies";
import { CustomTextField } from "@/components/TextFields";
import { GetStartedButton, PinkButton } from "@/components/Buttons";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", background: "#040C18" }}>
      <Toolbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center" }}
            xs={12}
            md={6}
          >
            <Box>
              <Heading
                sx={{ fontSize: { md: "62px", sm: "50px", xs: "30px" } }}
              >
                The Best On-ramp and Off-ramp product in Africa{" "}
              </Heading>
              <GeneralTypo sx={{ mt: "4%" }}>
                The best seamless platform for converting crypto to your local
                currency.
              </GeneralTypo>
              <Box sx={{ mt: "7%", display: "flex" }}>
                <CustomTextField fullWidth />
                <GetStartedButton>Get Started</GetStartedButton>
              </Box>
            </Box>
          </Grid>
          <Grid item sx={{}} xs={12} md={6}>
            <Box>
              <Image
                src="/africa.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
