import React from "react";
import "./InputBox.css";
export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  currencyOptions = [],

}) {
  return (
    <>
      <div className="input-area">
        <div className="currency-amount">
          <label htmlFor="from-curr">{label}</label>
          <input
            type="number"
            id="from-curr"
            value={amount}
            onChange={(e) =>onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="currency-type">
          <label htmlFor="options">Currency Type</label>
          <select
            value={selectCurrency}
            id="options"
            onChange={(e) => onCurrencyChange && onCurrencyChange((e.target.value))}
          >
            {currencyOptions.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
