import React from "react";
import { ThemeProvider } from "styled-components/native";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";
import theme from "./src/theme";
import { AppRoute } from "./src/routers/app.routers";
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
}