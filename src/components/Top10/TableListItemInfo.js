import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const TableListItemInfo = props => {
  return (
    <td>
      <NavLink
        to={{
          pathname: `/detail/${props.symbol}`,
          symbol: props.symbol,
          name: props.companyName
        }}
      >
        <Button color="info">info</Button>{" "}
      </NavLink>
    </td>
  );
};

export default TableListItemInfo;
