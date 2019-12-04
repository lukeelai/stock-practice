import React from "react";

const StockDetailPE = props => {
  return (
    <tr>
      <th scope="row">PE Ratio</th>
      <td>
        {props.stocks.length === 0
          ? props.watch[0].peRatio
          : props.stocks[0].peRatio}
      </td>
    </tr>
  );
};

export default StockDetailPE;
