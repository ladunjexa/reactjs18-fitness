import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Zexercise-Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#B8C1EC">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "41px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      &copy; Zexercise. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
