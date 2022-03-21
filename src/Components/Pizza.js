import React, { useState, Fragment } from "react";
import "../Styles/Pizza.css";

const Pizza = ({
  data,
  dataPizza,
  pizza,
  setPizza,
  currentExtra,
  setCurrentExtra,
  totalExtras,
  setTotalExtras,
  totalPizza,
  setTotalPizza,
  totalPrice,
  setTotalPrice,
  dates,
  setDates,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    buttonClicked === true ? setButtonClicked(false) : setButtonClicked(true);
  };

  const handleOnChange = (e) => {
    setPizza(dataPizza.name);

    setTotalPizza(currentExtra.concat(totalExtras, pizza, totalPrice, dates));
  };

  const calcExtras3 = (value) => {
    data[0].extras.map((elem) =>
      elem[0] === value ? setTotalExtras([...totalExtras, elem[1]]) : null
    );
  };

  return (
    <Fragment>
      <div>
        <div className="pizza-container">
          <div className="pizza-name-price">
            <p className="pizza-name">{dataPizza.name}</p>
            <p className="pizza-price">${dataPizza.price}</p>
          </div>
          <div className="pizza-buttons">
            
              <button
                value={dataPizza}
                onClick={() => {
                  setPizza(dataPizza.name);
                  setTotalPrice(dataPizza.price);
                  setDates(
                    dates.getDate() +
                      "-" +
                      (dates.getMonth() + 1) +
                      "-" +
                      dates.getFullYear()
                  );
                }}
              >
                Choose
              </button>
              <button onClick={handleButtonClick}>Extras</button>
            
            <button onClick={handleOnChange}>Submit</button>
          </div>
        </div>
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
      </div>
    </Fragment>
  );
};
export default Pizza;
