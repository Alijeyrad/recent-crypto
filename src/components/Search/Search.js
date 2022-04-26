import React, { useEffect, useState, useRef } from "react";
import "./Search.css";
import Button from "../Button/Button";
import SelectId from "../SelectId/SelectId";
import SelectCurrency from "../SelectCurrency/SelectCurrency";
import { getCoinNameFromId } from '../../utils/getCoinName';

const Search = () => {
  const [id, setId] = useState("bitcoin");
  const [currency, setCurrency] = useState("usd");
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.classList.add('visible');
  },[])

  const handleSearch = async () => {
    let url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}`;
    setDone(false);
    setLoading(true);
    const x = await fetch(url);
    const response = await x.json();
    const price = response[id][currency];
    setPrice(price);
    setLoading(false);
    setMessage(`Every ${getCoinNameFromId(id)} is worth ${price} ${getCoinNameFromId(currency)}s now`);
    setDone(true);
  };

  return (
    <>
    <div className="search" ref={searchRef}>
      <SelectId handleIdChange={handleIdChange} />
      <SelectCurrency handleCurrencyChange={handleCurrencyChange} />
      <Button classes="searchButton" handleClick={handleSearch}>
        Get the price
      </Button>
    </div>
    {loading &&
    <div className="results">
      Loading...
    </div>
    }
    {done && 
    <div className="results">
     {message}
    </div>
    }
    </>
  );
};

export default Search;
