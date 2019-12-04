import React from "react";
import { InputGroup, InputGroupText, Input, Table } from "reactstrap";
import WatchListItemContainer from "../../containers/WatchListItemContainer";

const WatchStock = props => {
  return (
    <div>
      <InputGroup className="searchbox">
        <InputGroupText>search</InputGroupText>
        <Input
          placeholder="e.g. AAPL"
          type="text"
          onKeyPress={props.onKeyPress}
        />
      </InputGroup>
      <Table>
        <thead>
          <tr>
            <th onClick={props.onClickSymbol}>Symbol</th>
            <th onClick={props.onClickPrice}>Price</th>
            <th onClick={props.onClickVolume}>Volume</th>
            <th>Last Updated</th>
            <th></th>
          </tr>
        </thead>
        {props.watch.length === 0 ? (
          <tbody />
        ) : (
          props.watch.map(stock => {
            return (
              <WatchListItemContainer
                key={stock.symbol}
                {...stock}
                onRefresh={props.onRefresh}
              />
            );
          })
        )}
      </Table>
    </div>
  );
};

export default WatchStock;
