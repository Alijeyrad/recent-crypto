import React from "react";

const TableRow = (props) => {
  const coin = props.data;

  return (
    <>
      <tr>
        <th>{coin.name}</th>
        <td>{coin.price}</td>
        <td>{coin.high}</td>
        <td>{coin.low}</td>
        <td
          style={{ color: coin.change > 0 ? "green" : "red" }}
        >
          {coin.change}%
        </td>
      </tr>
    </>
  );
};

export default TableRow;
