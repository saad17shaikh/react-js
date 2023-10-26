import { useState } from "react";
import "./App.css";
import UseCurencyInfo from "./Components/Hooks/UseCurencyInfo";
import InputBox from "./Components/InputBox";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = UseCurencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);


  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="container">
        <div className="box">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }  
        }>
            <div className="from">
              <InputBox
                label={from}
                amount={amount}
                selectCurrency={from}
                currencyOptions={currencyOptions}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="to">
              <InputBox
                label={to}
                amount={convertedAmount}
                selectCurrency={to}
                onCurrencyChange={(currency) =>setTo(currency)}
                currencyOptions={currencyOptions}
              />
            </div>
            <button type="submit">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
