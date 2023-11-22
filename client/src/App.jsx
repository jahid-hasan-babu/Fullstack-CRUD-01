import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
