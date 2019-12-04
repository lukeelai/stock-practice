import React from "react";
import { Table } from "reactstrap";

//Components
import StockDetailPrice from "./StockDetailPrice";
import StockDetailPercent from "./StockDetailPercent";
import StockDetailClose from "./StockDetailClose";
import StockDetailPE from "./StockDetailPE";
import StockDetailUpdate from "./StockDetailUpdate";

const StockDetail = props => {
  return (
    <Table>
      <tbody>
        <StockDetailPrice {...props} />
        <StockDetailPercent {...props} />
        <StockDetailClose {...props} />
        <StockDetailPE {...props} />
        <StockDetailUpdate {...props} />
      </tbody>
    </Table>
  );
};

export default StockDetail;
