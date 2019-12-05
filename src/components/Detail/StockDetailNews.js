import React from "react";

const StockDetailNews = props => {
  const stockDetails = props.details.filter(detail => {
    return detail.quote.symbol === props.location.symbol;
  });
  return (
    <div className="container">
      <h1 className="row">
        {stockDetails.length > 0 ? stockDetails[0].quote.symbol : ""} News
      </h1>
      <div className="row">
        <p>1</p>
      </div>
    </div>
  );
};

export default StockDetailNews;
