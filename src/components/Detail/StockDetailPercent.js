import React from "react";

const StockDetailPercent = props => {
  return (
    <tr>
      <th scope="row">Percent Change</th>
      <td
        className={
          (props.stocks.length === 0
          ? props.watch[0].change.toFixed(2) > 0
          : props.stocks[0].change.toFixed(2) > 0)
            ? "text-success"
            : "text-danger"
        }
      >
        {(props.stocks.length === 0
        ? props.watch[0].change.toFixed(2) > 0
        : props.stocks[0].change.toFixed(2) > 0)
          ? "+"
          : ""}
        {props.stocks.length === 0
          ? (props.watch[0].changePercent * 100).toFixed(2)
          : (props.stocks[0].changePercent * 100).toFixed(2)}
        %
      </td>
    </tr>
  );
};

export default StockDetailPercent;
