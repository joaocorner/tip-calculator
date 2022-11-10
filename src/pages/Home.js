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
            <label>Bill</label>
            <div className="input__container--bill--input">
              <img src={icondollar} alt="icon dollar" />
              <input type="number" name="bill" id="bill" />
            </div>
          </div>
          <div>
            <label>Select Tip %</label>
            <div>
              <button className="button--tip">5%</button>
              <button className="button--tip">10%</button>
              <button className="button--tip">15%</button>
              <button className="button--tip">25%</button>
              <button className="button--tip">50%</button>
              <input
                type="number"
                name="custom"
                id="custom"
                className="button--tip"
              />
            </div>
          </div>
          <div className="input__container--">
            <label>Number of People</label>
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
