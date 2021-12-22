import React from "react";
import { HashRouter } from "react-router-dom";
import {
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography
} from "@mui/material";

import TopNavigation from "./components/TopNavigation";
import AppRoutes from "./components/AppRoutes";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark"
    },
    typography: {
      code: {
        borderBottom: "1px dotted #ccc",
        borderTop: "1px dotted #ccc",
        borderRadius: "5px",
        padding: "3px",
        background: "#ccc2"
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
        <Typography variant="h1">API Demo</Typography>
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
