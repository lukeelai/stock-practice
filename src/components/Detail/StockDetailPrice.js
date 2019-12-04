import React from "react";

const StockDetailPrice = props => {
  return (
    <tr>
      <th scope="row">Price</th>
      <td>
        $
        {props.stocks.length === 0
          ? props.watch[0].latestPrice.toFixed(2)
          : props.stocks[0].latestPrice.toFixed(2)}
        <h6
          className={
            (props.stocks.length === 0
            ? props.watch[0].change.toFixed(2) > 0
            : props.stocks[0].change.toFixed(2) > 0)
              ? "text-success"
              : "text-danger"
          }
          style={{ display: "inline", marginLeft: "5px" }}
        >
          (
          {(props.stocks.length === 0
          ? props.watch[0].change.toFixed(2) > 0
          : props.stocks[0].change.toFixed(2) > 0)
            ? "+"
            : ""}
          {props.stocks.length === 0
            ? props.watch[0].change.toFixed(2)
            : props.stocks[0].change.toFixed(2)}
          )
        </h6>
      </td>
    </tr>
  );
};

export default StockDetailPrice;
