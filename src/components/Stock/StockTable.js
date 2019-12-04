import React from "react";

//Containers
import TabeListContainer from "../../containers/TableListContainer";
import StockFilterContainer from "../../containers/StockFilterContainer";

const StockTable = () => {
  return (
    <div>
      <StockFilterContainer />
      <TabeListContainer />
    </div>
  );
};

export default StockTable;
