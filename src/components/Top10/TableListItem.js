import React from "react";
//Components
import TableListItemName from "./TableListItemName";
import TableListItemPercent from "./TableListItemPercent";
import TableListItemPrice from "./TableListItemPrice";
import TableListItemInfo from "./TableListItemInfo";
const TableListItem = props => {
  return (
    <tbody key={props.symbol}>
      <tr>
        <TableListItemName {...props} />
        <TableListItemPercent {...props} />
        <TableListItemPrice {...props} />
        <TableListItemInfo {...props} />
      </tr>
    </tbody>
  );
};

export default TableListItem;
