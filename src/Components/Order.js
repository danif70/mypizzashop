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
 /*  const [buttonClicked, setButtonClicked] = useState(false); */

  const navigate = useNavigate();

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

  const handleClick2 = (e) => {
    <Dashboard objectPizza={objectPizza} />;
    navigate("/dashboard");
  };
 /*  const handleButtonClick = () => {
    buttonClicked === true ? setButtonClicked(false) : setButtonClicked(true);
  };
  const calcExtras3 = (value) => {
    data[0].extras.map((elem) =>
      elem[0] === value ? setTotalExtras([...totalExtras, elem[1]]) : null
    );
  }; */

  return (
    <Fragment>
      <div className="all-pizzas-container">
        <p className="container-title">NEW ORDER</p>
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
       {/*  <div className='pizza-container extramenu'>
          <p>Choose Extras</p>
          <button onClick={handleButtonClick}>Extras</button>
          {buttonClicked === true ? (
          <div>
            <select
              multiple
              onChange={(e) => {
                setCurrentExtra([...currentExtra, e.target.value]);
                calcExtras3(e.target.value);
              }}
            >
              {data[0].extras.map((item) => (
                <option key={item[0]} value={item[0]}>
                  {item[0]}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        </div> */}
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
          <div className='container-button-navigation'>
          <button className='button-navigation' onClick={(e) => handleClick2(e)}>
            Dashboard
          </button>
          <button className='button-navigation' onClick={(e) => navigate("/")}>
            Home
          </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Order;
