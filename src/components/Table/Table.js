import React, { useEffect, useContext, useRef } from "react";
import "./Table.css";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import CoinContext from "../../contexts/CoinContext";

const Table = () => {
  const coinContext = useContext(CoinContext)
  const coinNames = Object.keys(coinContext.coins)

  const tableRef = useRef(null)

  useEffect(() => {
    tableRef.current?.classList?.add('visible')
  }, [coinContext])

  return (
    <>
      {coinContext.updated ? 
      (<table ref={tableRef}>
        <thead>
          <TableHead />
        </thead>
        <tbody>
        {coinNames.map((coin) => (
          <TableRow data={coinContext.coins[coin]} key={`row-${Math.random()}`}/>
        ))}
        </tbody>
      </table>) : (
        <div className="loading">Loading...</div>
      )
      }

    </>
  );
};

export default Table;
