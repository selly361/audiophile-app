import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { store } from "app/store";
import { ThemeProvider } from "styled-components";
import { theme } from "global/theme";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
