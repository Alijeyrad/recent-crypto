import React from "react";

const SelectId = ({ handleIdChange }) => (
  <div className="id">
      <label htmlFor="ids">Pick a coin</label>
      <select className="select1" onChange={handleIdChange} name="ids" id="ids">
        <option value="bitcoin">Bitcoin (BTC)</option>
        <option value="ethereum">Ethereum (ETH)</option>
        <option value="ripple">XRP (Ripple)</option>
        <option value="shiba-inu">Shiba Inu</option>
        <option value="solana">Solana (SOL)</option>
        <option value="tether">Tether (USDT)</option>
        <option value="binancecoin">Binance Coin (BNB)</option>
        <option value="usd-coin">USD Coin (USDC)</option>
        <option value="terra-luna">Terra (LUNA)</option>
        <option value="cardano">Cardano (ADA)</option>
        <option value="avalanche-2">Avalanche (AVAX)</option>
        <option value="polkadot">Polkadot (DOT)</option>
        <option value="dogecoin">Dogecoin (DOGE)</option>
      </select>
    </div>
);

export default SelectId;