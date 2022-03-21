import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../Styles/ResumeOrder.css";

const OrderDashboard = ({
  pizza,
  totalPizza,
  setTotalPizza,
  totalExtras,
  totalPrice,
  currentExtra,
  client,
  setClient,
  phone,
  setPhone,
  objectPizza,
  setObjectPizza,
}) => {

 
 
  const reduceTotalExtras = () => {
    let totalExtraPrices =
      totalExtras.reduce(
        (prev, curr) => (Number(prev) || 0) + (Number(curr) || 0),
        0
      ) + Number(totalPrice);
     
    return totalExtraPrices;
  };

  return (
    <Fragment>
      <div className="container-order-dashboard">
        <p className='container-title'>ORDER RESUME</p>
        <p>Name client: {client}</p>
        <p>Phone: {phone}</p>
        <div className='p-resume-order'>
          <p>Pizza {pizza}</p>
          <div>
          <p >
           with extras: 
            </p>
            <p className='p-extras'>
            {currentExtra}
          </p>
          </div>
          <p>Pizza price: {totalPrice}</p>
          <p>
            Total Price:{" "}
            {totalPizza !== [] ? reduceTotalExtras() : 0}{" "}
          </p>{" "}
        </div>
    
      </div>
     
    </Fragment>
  );
};
export default OrderDashboard;
