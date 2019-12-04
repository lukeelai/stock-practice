import React from "react";

const TableListItemPercent = props => {
  return (
    <td>
      {props.changePercent ? (props.changePercent * 100).toFixed(2) : ""}%
    </td>
  );
};
export default TableListItemPercent;
