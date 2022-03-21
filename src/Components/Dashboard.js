import React, {  Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ totalPizza }) => {
  const navigate = useNavigate();

  let arrayOrder = JSON.parse(localStorage.getItem("totalOrder_V1"));

  console.log("array", arrayOrder);
  return (
    <Fragment>
      <p>ORDER TRACKING</p>
      <div className="container-order-dashboard">
        {arrayOrder.map((item) => (
          <p key={item[0]}>{item}</p>
        ))}
      </div>
      <div className="container-button-navigation">
        <button
          className="button-navigation"
          onClick={(e) => navigate("/order")}
        >
          Order
        </button>
        <button className="button-navigation" onClick={(e) => navigate("/")}>
          Home
        </button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
