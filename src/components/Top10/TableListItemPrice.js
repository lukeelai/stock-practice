import React from "react";

const TableListItemPrice = props => {
  return (
    <td>
      ${props.latestPrice ? props.latestPrice.toFixed(2) : ""}
      <h6
        className={"text-success"}
        style={{ display: "inline", marginLeft: "5px" }}
      >
        (+{props.change ? props.change.toFixed(2) : ""})
      </h6>
    </td>
  );
};

export default TableListItemPrice;
