import React from "react";
import { HashRouter } from "react-router-dom";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";

import TopNavigation from "./components/TopNavigation";
import AppRoutes from "./components/AppRoutes";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark"
    },
    typography: {
      code: {
        border: "1px solid red"
      },
      button: {
        border: "1px solid transparent"
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>API Demo</h1>
        <HashRouter>
          <Grid container spacing={2}>
            <TopNavigation />
            <AppRoutes />
          </Grid>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}
