import React from "react";

const SelectCurrency = ({ handleCurrencyChange }) => (
  <div className="currency">
      <label htmlFor="currency">Pick a currency</label>
      <select className="select2" onChange={handleCurrencyChange} name="currency" id="currency">
        <option value="usd">US Dollar</option>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="eur">Euro</option>
      </select>
    </div>
);

export default SelectCurrency;