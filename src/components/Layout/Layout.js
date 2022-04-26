import React, { useReducer, useEffect, useState } from "react";
import "./Layout.css";
import Header from "../Header/Header";
import CoinReducer from "../../reducers/Coins.reducer";
import CoinContext from "../../contexts/CoinContext";

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(CoinReducer, {
    coins: {
      bitcoin: { name: "Bitcoin" },
      ethereum: { name: "Ethereum" },
      ripple: { name: "XRP" },
      "shiba-inu": { name: "Shiba Inu" },
      solana: { name: "Solana" },
    },
  });

  const [reRender, setRerender] = useState(0);

  const dateNow = new Date();

  const handleAPI = async () => {
    for (let coin in state.coins) {
      let x = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
      let response = await x.json();
      dispatch({
        type: "COIN-UPDATE",
        newCoin: response,
        name: coin,
        date: dateNow,
      });
    }
  };

  useEffect(() => {
    handleAPI();
  }, [reRender]);

  return (
    <>
      <CoinContext.Provider
        value={{
          coins: state.coins,
          date: state.date,
          updated: state.updated,
          reRenderParent: setRerender,
          reRenderValue: reRender,
        }}
      >
        <Header />
        {children}
      </CoinContext.Provider>
    </>
  );
};

export default Layout;
