import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Components/Home";
import OrderDashboard from "../src/Components/OrderDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<OrderDashboard />} />
      </Routes>
    </>
  );
}

export default App;
