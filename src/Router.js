import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Function from "./pages/Function";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="function" element={<Function />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
