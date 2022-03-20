import React, { Fragment, useState } from "react";
import "../Styles/OrderDashboard.css";

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
  setObjectPizza
}) => {
  
console.log(totalPizza) 
 

 
const handleClick = (e) => {
  
  setObjectPizza(totalPizza.concat(client, phone))
}


  return (
    <Fragment>
      <div className="container-order-dashboard">
        <p>ORDER RESUME</p>
        <div className="client-section">
          <input
            className="client-name"
            value={client}
            type="text"
            required
            onChange={(e) => {
              setClient(e.target.value);
              
            }}
          />
          <input
            className="client-phone"
            value={phone}
            type="tel"
            required
            onChange={(e) => {
              setPhone(e.target.value);
              
            }}
          />
          <button onClick={handleClick}>Accept</button>
        </div>
        <div>
          <p>Pizza Name</p>
          <p>
            {pizza} with {currentExtra}
          </p>
          <p>Pizza price: {totalPrice}</p>
          <p>
            Total Price with extras:{" "}
            {totalPizza !== []
              ? totalExtras.reduce(
                  (prev, curr) => (Number(prev) || 0) + (Number(curr) || 0),
                  0
                ) + Number(totalPrice)
              : 0}{" "}
          </p>{" "}
        </div>
        {console.log(objectPizza)}
      </div>
    </Fragment>
  );
};

export default OrderDashboard;
