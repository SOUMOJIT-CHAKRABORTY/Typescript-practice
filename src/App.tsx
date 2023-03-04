import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </Router>
  );
}

export default App;
