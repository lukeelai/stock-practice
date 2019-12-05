import React from "react";

//Components
import StockDetailNewsItem from "./StockDetailNewsItem";

const StockDetailNews = props => {
  const stockDetails = props.details.filter(detail => {
    return detail.quote.symbol === props.location.symbol;
  });
  return (
    <div className="container">
      <h1 className="row">
        {stockDetails.length > 0 ? stockDetails[0].quote.companyName : ""} News
      </h1>
      <div className="row">
        {stockDetails.length > 0 ? (
          stockDetails[0].news.map(news => {
            return (
              <StockDetailNewsItem
                {...news}
                key={stockDetails[0].quote.symbol}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StockDetailNews;
