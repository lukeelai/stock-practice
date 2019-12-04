import React from "react";
import { Tooltip } from "reactstrap";
import { NavLink } from "react-router-dom";

const WatchListItemName = props => {
  return (
    <th scope="row">
      <NavLink
        to={{
          pathname: `/detail/${props.symbol}`,
          symbol: props.symbol,
          name: props.companyName
        }}
        id={props.symbol + "-watch"}
      >
        {props.symbol}
        <Tooltip
          placement="right"
          target={props.symbol + "-watch"}
          isOpen={props.tooltipOpen}
          toggle={props.tooltipToggle}
        >
          {props.companyName}
        </Tooltip>
      </NavLink>
    </th>
  );
};

export default WatchListItemName;
