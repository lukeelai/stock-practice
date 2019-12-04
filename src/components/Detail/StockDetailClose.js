import React from "react";

const StockDetailClose = props => {
  return (
    <tr>
      <th scope="row">Previous Close</th>
      <td>
        $
        {props.stocks.length === 0
          ? props.watch[0].previousClose
          : props.stocks[0].previousClose}
      </td>
    </tr>
  );
};

export default StockDetailClose;
