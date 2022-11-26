import { useEffect, useState } from "react";
import icondollar from "../components/Images/icon-dollar.svg";
import iconperson from "../components/Images/icon-person.svg";
import logo from "../components/Images/logo.svg";
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
    console.log(e.target.value);
  };

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setTipPercent(0);
    setTipAmount(0);
    setCustomTip("");
  };

  const handleCalculate = () => {
    setTipAmount((bill * tipPercent) / 100 / people);
    setTotal(((bill * tipPercent) / 100 + parseInt(bill)) / people);
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
                // value={customTip}
              />
            </div>
          </div>
          <div className="input__container--">
            <label>Número de Pessoas</label>
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
            <p>${tipAmount.toFixed(2)}</p>
          </div>
          <div className="total_person">
            <div className="values">
              <label>Total</label>
              <span>/ pessoa</span>
            </div>
            <p>${total.toFixed(2)}</p>
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
