import { useEffect, useState } from "react";
import icondollar from "../assets/icon-dollar.svg";
import iconperson from "../assets/icon-person.svg";
import logo from "../assets/logo.svg";
import "./Home.scss";

const Home = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipPercent, setTipPercent] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [customTip, setCustomTip] = useState("custom");

  const handleBill = (e) => {
    setBill(e.target.value);
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  const handleTipPercent = (e) => {
    setTipPercent(e.target.value);
  };

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setTipPercent(0);
    setTipAmount(0);
    setCustomTip("");
  };

  const handleCalculate = () => {
    let valueTipAmount = ((bill * tipPercent) / 100 / people).toFixed(2);
    if (valueTipAmount === "NaN" || valueTipAmount === "Infinity") {
      valueTipAmount = 0;
    }
    setTipAmount(valueTipAmount);
    let valueTotal = (
      ((bill * tipPercent) / 100 + parseInt(bill)) /
      people
    ).toFixed(2);
    if (valueTotal === "NaN" || valueTotal === "Infinity") {
      valueTotal = 0;
    }
    setTotal(valueTotal);
  };

  useEffect(() => {
    handleCalculate();
  }, [bill, people, tipPercent, customTip]);

  return (
    <div className="home">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <div className="input__container">
          <div className="input__container--bill">
            <label>Conta</label>
            <div className="input__container--bill--input input--icon">
              <img src={icondollar} alt="logo" />
              <input
                type="number"
                name="bill"
                id="bill"
                onChange={handleBill}
                value={bill}
              />
            </div>
          </div>
          <div>
            <label>Selecionar Gorjeta %</label>
            <div>
              <button
                className="button--tip"
                onClick={(e) => handleTipPercent(e)}
                value="5"
              >
                5%
              </button>
              <button
                className="button--tip"
                onClick={(e) => handleTipPercent(e)}
                value="10"
              >
                10%
              </button>
              <button
                className="button--tip"
                onClick={(e) => handleTipPercent(e)}
                value="15"
              >
                15%
              </button>
              <button
                className="button--tip"
                onClick={(e) => handleTipPercent(e)}
                value="25"
              >
                25%
              </button>
              <button
                className="button--tip"
                onClick={(e) => handleTipPercent(e)}
                value="50"
              >
                50%
              </button>
              <input
                type="number"
                placeholder="Outro"
                name="custom"
                id="custom"
                className="button--tip"
                onChange={(e) => handleTipPercent(e)}
              />
            </div>
          </div>
          <div className="input__container--">
            <label>N??mero de Pessoas</label>
            <div className="input__container--people input--icon">
              <img src={iconperson} alt="logo" />
              <input
                type="number"
                name="people"
                id="people"
                onChange={handlePeople}
                value={people}
                min="1"
              />
            </div>
          </div>
        </div>
        <div className="result__container">
          <div className="tip_amount">
            <div className="values">
              <label>Gorjeta total</label>
              <span>/ pessoa</span>
            </div>
            <p>${tipAmount}</p>
          </div>
          <div className="total_person">
            <div className="values">
              <label>Total</label>
              <span>/ pessoa</span>
            </div>
            <p>${total}</p>
          </div>
          <button className="reset_button" onClick={handleReset}>
            reset
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
