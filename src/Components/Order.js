import React, { useState, useEffect, Fragment } from "react";
import ResumeOrder from "./ResumeOrder";
import Pizza from "./Pizza";
import "../Styles/Order.css";

const Order = () => {
  const [data, setData] = useState([]);
  const [pizza, setPizza] = useState("");
  const [currentExtra, setCurrentExtra] = useState([]);
  const [totalExtras, setTotalExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalPizza, setTotalPizza] = useState([]);
  const [client, setClient] = useState("");
  const [phone, setPhone] = useState("");
  const [dates, setDates] = useState(new Date());
  const [objectPizza, setObjectPizza] = useState([]);
  
 

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("data.json", {
        method: "GET",
      });
      const data = await response.json();
      setData(data);
      //console.log(data)
    };
    getProduct();
  }, []);

  return (
    <Fragment>
      <div className="all-pizzas-container">
        <p className='container-title'>NEW ORDER</p>
        <div>
          {data.map((item) => (
            <Pizza
              key={item.name}
              data={data}
              dataPizza={item}
              pizza={pizza}
              setPizza={setPizza}
              currentExtra={currentExtra}
              setCurrentExtra={setCurrentExtra}
              totalExtras={totalExtras}
              setTotalExtras={setTotalExtras}
              totalPizza={totalPizza}
              setTotalPizza={setTotalPizza}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              dates={dates}
              setDates={setDates}
            />
          ))}
        </div>
        <div>
          <ResumeOrder
            pizza={[pizza]}
            totalPizza={totalPizza}
            setTotalPizza={setTotalPizza}
            totalExtras={totalExtras}
            totalPrice={totalPrice}
            currentExtra={currentExtra}
            client={client}
            setClient={setClient}
            phone={phone}
            setPhone={setPhone}
            objectPizza={objectPizza}
            setObjectPizza={setObjectPizza}
          />
        </div>

      </div>
  
    </Fragment>
  );
};

export default Order;
