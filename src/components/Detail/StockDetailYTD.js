import React from "react";

const StockDetailYTD = props => {
  return (
    <tr>
      <th scope="row">YTD Change</th>
      <td
        className={
          (props.stocks.length === 0
          ? props.watch[0].ytdChange.toFixed(2) > 0
          : props.stocks[0].ytdChange.toFixed(2) > 0)
            ? "text-success"
            : "text-danger"
        }
      >
        {(props.stocks.length === 0
        ? props.watch[0].ytdChange.toFixed(2) > 0
        : props.stocks[0].ytdChange.toFixed(2) > 0)
          ? "+"
          : ""}
        {props.stocks.length === 0
          ? (props.watch[0].ytdChange * 100).toFixed(2)
          : (props.stocks[0].ytdChange * 100).toFixed(2)}
        %
      </td>
    </tr>
  );
};

export default StockDetailYTD;
