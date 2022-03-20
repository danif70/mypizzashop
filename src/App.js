import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Components/Home";
import Order from "../src/Components/Order"
import OrderDashboard from "../src/Components/OrderDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="dashboard" element={<OrderDashboard />} />
      </Routes>
    </>
  );
}

export default App;
