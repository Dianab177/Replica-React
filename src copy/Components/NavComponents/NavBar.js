import React from 'react';
import './StylesNav/StylesNav.css';
import { Typography, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { green, purple, red } from "@mui/material/color";
import { theme } from "../Querys/MediaQuerys";
import MyApp from "./MenuShow";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    color: green[500]
  },
  [theme.breakpoints.up("tablet")]: {
    color: purple[500]
  },
  [theme.breakpoints.up("desktop")]: {
    color: red[500]
  }
}));

export default function NavBar() {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Responsive>
          <Typography variant="h4">Advanced Material UI</Typography>
          <Typography variant="h4">{w} px</Typography>
          <Typography
            sx={{
              display: {
                tablet: "none"
              }
            }}
          >
            Mobile
          </Typography>
          <Typography
            sx={{
              display: {
                mobile: "none",
                tablet: "block",
                desktop: "none"
              }
            }}
          >
            Tablet
          </Typography>
          <Typography
            sx={{
              display: {
                mobile: "none",
                tablet: "none",
                desktop: "block"
              }
            }}
          >
            Desktop
          </Typography>
        </Responsive>
        <MyApp />
      </div>
    </ThemeProvider>
  );
}
