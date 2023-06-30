import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./pages/MainLayout";
import { loadingSettings } from "./utils/localSettings";
import { testing } from "./firebase";

const App: React.FC = () => {
  testing();
  const dispatch = useDispatch();
  React.useEffect(() => {
    loadingSettings(dispatch);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
