import React from "react";
import { Container, Row } from "reactstrap";

//Components
import StockDetailNewsItem from "./StockDetailNewsItem";

const StockDetailNews = props => {
  const stockDetails = props.details.filter(detail => {
    return detail.quote.symbol === props.location.symbol;
  });
  return (
    <Container>
      <Row>
        <h1>
          {stockDetails.length > 0 ? stockDetails[0].quote.companyName : ""}{" "}
          News
        </h1>
      </Row>
      <Row>
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
      </Row>
    </Container>
  );
};

export default StockDetailNews;
