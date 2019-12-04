import React, { Fragment } from "react";
import { InputGroup, InputGroupText, Input } from "reactstrap";

const StockFilter = props => {
  return (
    <Fragment>
      <InputGroup className="searchbox">
        <InputGroupText>filter</InputGroupText>
        <Input
          placeholder={
            props.stocks.length > 0
              ? `e.g. ${props.stocks[0].symbol}`
              : "e.g. AAPL"
          }
          type="text"
          value={props.filters.text}
          onChange={props.onTextChange}
        />
      </InputGroup>
    </Fragment>
  );
};
export default StockFilter;
