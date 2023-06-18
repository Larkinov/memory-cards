import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import GamePage from "./components/pages/GamePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import MainLayout from "./components/pages/MainLayout";
const App: React.FC = () => {
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
