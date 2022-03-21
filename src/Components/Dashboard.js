import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ objectPizza }) => {
  console.log(objectPizza);
  const navigate = useNavigate();

  return (
    <Fragment>
      <p>ORDER TRACKING</p>
      <div className="container-order-dashboard">
        <p>hola</p>
      </div>
      <div className="container-button-navigation">
        <button className='button-navigation' onClick={(e) => navigate("/order")}>Order</button>
        <button className='button-navigation' onClick={(e) => navigate("/")}>Home</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
