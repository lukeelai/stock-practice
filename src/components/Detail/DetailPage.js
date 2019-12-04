import React from "react";

//Containers
import StockDetailContainer from "../../containers/StockDetailContainer";

const DetailPage = props => {
  return (
    <div>
      <h3>
        {props.location.symbol} - {props.location.name}
      </h3>
      <StockDetailContainer symbol={props.location.symbol} />
    </div>
  );
};

export default DetailPage;
