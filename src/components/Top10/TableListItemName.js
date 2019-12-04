import React from "react";
import { Tooltip } from "reactstrap";

const TableListItemName = props => {
  return (
    <th scope="row" onClick={props.toWatch}>
      <span id={props.symbol}>
        {props.symbol}
        <Tooltip
          placement="right"
          target={props.symbol}
          isOpen={props.tooltipOpen}
          toggle={props.tooltipToggle}
        >
          {props.companyName}
        </Tooltip>
      </span>
    </th>
  );
};

export default TableListItemName;
