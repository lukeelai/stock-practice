import React from "react";

const WatchListItemPrice = props => {
  return (
    <td>
      ${props.latestPrice ? props.latestPrice.toFixed(2) : ""}
      <h6
        className={
          props.latestPrice - props.previousClose > 0
            ? "text-success"
            : "text-danger"
        }
        style={{ display: "inline", marginLeft: "5px" }}
      >
        ({props.latestPrice - props.previousClose > 0 ? "+" : ""}
        {props.latestPrice - props.previousClose
          ? (props.latestPrice - props.previousClose).toFixed(2)
          : ""}
        )
      </h6>
    </td>
  );
};

export default WatchListItemPrice;
