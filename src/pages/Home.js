import icondollar from "../components/Images/icon-dollar.svg";
import iconperson from "../components/Images/icon-person.svg";
import logo from "../components/Images/logo.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <div className="input__container">
          <div className="input__container--bill">
            <label htmlFor="bill">Bill</label>
            <div className="input__container--bill--input">
              <img src={icondollar} alt="icon dollar" />
              <input type="number" name="bill" id="bill" />
            </div>
          </div>
          <label>Select Tip %</label>
          <div className="input__container--">
            <label htmlFor="bill">Number of People</label>
            <div className="input__container--people">
              <img src={icondollar} alt="icon dollar" />
              <input type="number" name="people" id="people" />
            </div>
          </div>
        </div>
        <div className="result__container">
          <div className="tip_amount">
            <div className="values">
              <label>Tip Amount</label>
              <span>/ person</span>
            </div>
            <p>${`0.00`}</p>
          </div>
          <div className="total_person">
            <div className="values">
              <label>Total</label>
              <span>/ person</span>
            </div>
            <p>${`0.00`}</p>
          </div>
          <button className="reset_button">reset</button>
        </div>
      </main>
      {/* <img src={icondollar} alt="logo" />
      <img src={iconperson} alt="logo" /> */}
    </div>
  );
};

export default Home;
