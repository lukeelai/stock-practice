import React from "react";
import { Table } from "reactstrap";

//Containers
import TableListItemContainer from "../../containers/TableListItemContainer";

const TableList = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th onClick={props.onClickSymbol}>Symbol</th>
          <th onClick={props.onClickChange}>Change</th>
          <th onClick={props.onClickPrice}>Price</th>
          <th></th>
        </tr>
      </thead>
      {props.stocks.length === 0 ? (
        <tbody />
      ) : (
        props.stocks.map(stock => {
          return <TableListItemContainer key={stock.symbol} {...stock} />;
        })
      )}
    </Table>
  );
};

export default TableList;
