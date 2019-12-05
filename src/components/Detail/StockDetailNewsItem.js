import React from "react";

const StockDetailNewsItem = props => {
  return (
    <div className="container" key={props.key}>
      <h3 className="row">
        <a href={props.url} target="_blank">
          {props.headline}
        </a>
      </h3>
      <p className="row">{props.summary}</p>
    </div>
  );
};

export default StockDetailNewsItem;
