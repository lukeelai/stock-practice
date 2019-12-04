import React from "react";

const StockDetail52High = props => {
  return (
    <tr>
      <th scope="row">52 Week High</th>
      <td>
        $
        {props.stocks.length === 0
          ? props.watch[0].week52High
          : props.stocks[0].week52High}
      </td>
    </tr>
  );
};

export default StockDetail52High;
