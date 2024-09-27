import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MasonryGrid from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MasonryGrid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
