import { Box, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import { CustomTextField } from "./TextFields";
import { GetStartedButton, PinkButton } from "./Buttons";

const currencies = [
  {
    value: "USDC",
    label: "USDC",
  },
  {
    value: "BUSD",
    label: "BUSD",
  },
  {
    value: "STRK",
    label: "STRK",
  },
];

const GetFiat = () => {
  return (
    <Box sx={{ padding: { xs: "", md: "4%" } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography sx={{ mb: "2%", color: "#fff" }}>
              Select Token :
            </Typography>
            <CustomTextField
              defaultValue="BUSD"
              sx={{ width: "100%" }}
              select
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Set the maximum height for the menu
                      background:
                        "var(--gradient-1, linear-gradient(90deg, #FF0080 0%, #AA1CA6 100%))",
                    },
                  },
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "#fff",
                  },
                  color: "#fff",
                  backgroundColor: "grey",
                  borderRadius: "12px",
                },
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomTextField>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{}}>
            <Typography sx={{ mb: "2%", color: "#fff" }}>
              Number of Tokens :
            </Typography>
            <CustomTextField
              placeholder="0"
              sx={{ width: "100%" }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "#fff",
                  },
                  color: "#fff",
                  backgroundColor: "grey",
                  borderRadius: "12px",
                },
              }}
            ></CustomTextField>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          <Box sx={{ mt: "7%" }}>
            <Typography sx={{ mb: "2%", color: "#fff" }}>
              Recipient phone number :
            </Typography>
            <CustomTextField
              placeholder="+254 333 333"
              sx={{ width: "100%" }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "#fff",
                  },
                  color: "#fff",
                  backgroundColor: "grey",
                  borderRadius: "12px",
                },
              }}
            ></CustomTextField>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: "7%" }}>
            <Typography sx={{ mb: "2%", color: "#fff" }}>
              Amount to Receive :
            </Typography>
            <CustomTextField
              placeholder="Amount to receive"
              sx={{ width: "100%" }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "#fff",
                  },
                  color: "#fff",
                  backgroundColor: "grey",
                  borderRadius: "12px",
                },
              }}
            ></CustomTextField>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "4%" }}>
        <PinkButton>Get Mobile Money</PinkButton>
      </Box>
    </Box>
  );
};

export default GetFiat;
