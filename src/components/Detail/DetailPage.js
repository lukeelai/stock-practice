import React from "react";

//Containers
import StockDetailContainer from "../../containers/StockDetailContainer";

//Components
import StockDetailNews from "./StockDetailNews";

const DetailPage = props => {
  return (
    <div className="container">
      <div className="row">
        <h3>
          {props.location.symbol} - {props.location.name}
        </h3>
      </div>
      <StockDetailContainer symbol={props.location.symbol} />
      <StockDetailNews {...props} />
    </div>
  );
};

export default DetailPage;
