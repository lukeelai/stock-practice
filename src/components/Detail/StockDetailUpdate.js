import React from "react";

const StockDetailUpdate = props => {
  return (
    <tr>
      <th scope="row">Last Updated</th>
      <td className="text-primary">
        {props.stocks.length === 0
          ? props.convertDate(props.watch[0].latestUpdate)
          : props.convertDate(props.stocks[0].latestUpdate)}{" "}
        (PST)
      </td>
    </tr>
  );
};

export default StockDetailUpdate;
