import React from "react";

import "./App.css";

import HomePage from "./components/screens/Home/Home";
import PrivateRoute from "./utils/router/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import Login from "./components/screens/auth/Login/Login";
import RegisterPage from "./components/screens/auth/Register/Register";
import AuthPage from "./components/screens/auth/Auth";
import { ColorModeContext, useMode } from "./theme/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutComponent from "./components/layout/index";
import SettingsPage from "./components/screens/Settings";
import NewsPage from "./components/screens/News";
import { Favorite } from "@mui/icons-material";
import WatchListPage from "./components/screens/WatchList";
import SingleAssetPage from "./components/screens/singe-asset";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/watchlist" element={<WatchListPage />} />
                <Route path="/single/:id" element={<SingleAssetPage />} />
              </Route>
              <Route path="/login" element={<AuthPage />} />
              <Route path="/register" element={<AuthPage />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
