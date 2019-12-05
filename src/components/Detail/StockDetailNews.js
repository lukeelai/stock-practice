import React from "react";

const StockDetailNews = props => {
  const stockDetails = props.details.filter(detail => {
    return detail.quote.symbol === props.symbol;
  });
  return <>{stockDetails.length > 0 ? stockDetails[0].quote.symbol : ""}</>;
};

export default StockDetailNews;
