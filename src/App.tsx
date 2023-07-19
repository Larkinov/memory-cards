import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./pages/MainLayout";
import { loadingSettings } from "./utils/localSettings";

import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import "./style.css";
import useMyTheme from "./components/Hooks/useMyTheme";

const App: React.FC = () => {
  const myTheme = useMyTheme();
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadingSettings(dispatch);
  }, []);

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Paper sx={{ height: "100vh", boxShadow: "none", borderRadius: "0" }}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<MainPage />} />
              <Route path="game" element={<GamePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
