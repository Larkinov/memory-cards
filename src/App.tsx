import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./pages/MainLayout";
import { loadingSettings } from "./utils/localSettings";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Paper } from "@mui/material";
import "./style.css";
import { ModeTheme } from "./redux/slices/InterfaceSlice";

const App: React.FC = () => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const { theme } = useSelector((state: RootState) => state.interfaceUI);

  const dispatch = useDispatch();

  React.useEffect(() => {
    loadingSettings(dispatch);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme===ModeTheme.DARK_THEME ? darkTheme: lightTheme}>
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
