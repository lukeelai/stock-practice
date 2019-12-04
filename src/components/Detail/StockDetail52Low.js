import React from "react";

const StockDetail52Low = props => {
  return (
    <tr>
      <th scope="row">52 Week Low</th>
      <td>
        $
        {props.stocks.length === 0
          ? props.watch[0].week52Low
          : props.stocks[0].week52Low}
      </td>
    </tr>
  );
};

export default StockDetail52Low;
