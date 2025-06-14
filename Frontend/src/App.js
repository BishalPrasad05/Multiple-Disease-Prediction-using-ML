import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CADForm from "./pages/CADForm";
import ArrhythmiaForm from "./pages/ArrhythmiaForm";
import Result from "./pages/Result";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cad" element={<CADForm />} />
      <Route path="/arrhythmia" element={<ArrhythmiaForm />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

export default App;
