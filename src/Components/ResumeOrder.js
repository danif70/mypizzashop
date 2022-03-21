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
 /*  const navigate = useNavigate(); */
 console.log(totalPizza)

  const reduceTotalExtras = () => {
    let totalExtraPrices =
      totalExtras.reduce(
        (prev, curr) => (Number(prev) || 0) + (Number(curr) || 0),
        0
      ) + Number(totalPrice);
     
    return totalExtraPrices;
  };

  const handleClick = (e) => {
    setObjectPizza(totalPizza.concat(client, phone));
    console.log('object', objectPizza)
  };
 /*  const handleClick2 = (e) => {
    <Dashboard objectPizza={objectPizza} />;
    navigate("dashboard");
  }; */

  return (
    <Fragment>
      <div className="container-order-dashboard">
        <p className='container-title'>ORDER RESUME</p>
        <div className="client-section">
          <input
            className="client-name"
            value={client}
            type="text"
            placeholder='Name'
            required
            onChange={(e) => {
              setClient(e.target.value);
            }}
          />
          <input
            className="client-phone"
            value={phone}
            type="tel"
            placeholder='Phone'
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
         
        </div>
       
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
        <button className="button-resume" onClick={handleClick}>Accept</button>
    {/*   <button className="dashboard" onClick={(e) => handleClick2}>Go to Dashboard</button>  */}
      </div>
     
    </Fragment>
  );
};
export default OrderDashboard;
