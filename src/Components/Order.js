import React, { useState, useEffect, Fragment } from "react";
import ResumeOrder from "./ResumeOrder";
import { useNavigate } from "react-router-dom";
import Pizza from "./Pizza";
import Dashboard from "./Dashboard";
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
  const navigate = useNavigate();

  localStorage.setItem("totalOrder_V1", JSON.stringify(totalPizza));

  console.log("order", totalPizza);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("data.json", {
        method: "GET",
      });
      const data = await response.json();
      setData(data);
    };
    getProduct();
  }, []);

  const handleClick2 = (e) => {
    <Dashboard totalPizza={totalPizza}  />;
    navigate("/dashboard");
  };

  return (
    <Fragment>
      <div className="all-pizzas-container">
        <p className="container-title">NEW ORDER</p>
        <div>
          <div>
            <div className="client-section">
              <input
                className="client-name"
                value={client}
                type="text"
                placeholder="Name"
                required
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              />
              <input
                className="client-phone"
                value={phone}
                type="tel"
                placeholder="Phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
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
              client={client}
              phone={phone}
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
          <div className="container-button-navigation">
            <button
              className="button-navigation"
              onClick={(e) => handleClick2(e)}
            >
              Dashboard
            </button>
            <button
              className="button-navigation"
              onClick={(e) => navigate("/")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Order;
