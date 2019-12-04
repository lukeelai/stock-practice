import React from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { addStock } from "../actions/stocks";
import { sortBySymbol, sortByChange, sortByPrice } from "../actions/filters";
// import TableListItem from "./TableListItem";
import TableListItemContainer from "../containers/TableListItemContainer";
import stockSelector from "../selectors/stocks";

export class TableValues extends React.Component {
  constructor(props) {
    super(props);
    const header = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };
    const params = {
      token: process.env.REACT_APP_API_KEY
    };
    axios
      .get("https://cloud.iexapis.com/stable/stock/market/list/gainers", {
        params: params,
        header: { header }
      })
      .then(result => {
        if (!result.data.some(item => item.symbol === this.props.symbol))
          result.data.map(stock => {
            this.props.addStock(stock);
            return this.props.stocks;
          });
      })
      .catch(e => {
        console.log(e);
      });
  }
  onClickSymbol = () => {
    this.props.sortBySymbol();
  };

  onClickChange = () => {
    this.props.sortByChange();
  };

  onClickPrice = () => {
    this.props.sortByPrice();
  };
  toUpdate = () => {
    console.log("update");
  };
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th onClick={this.onClickSymbol}>Symbol</th>
            <th onClick={this.onClickChange}>Change</th>
            <th onClick={this.onClickPrice}>Price</th>
            <th></th>
          </tr>
        </thead>
        {this.props.stocks.length === 0 ? (
          <tbody />
        ) : (
          this.props.stocks.map(stock => {
            return <TableListItemContainer key={stock.symbol} {...stock} />;
          })
        )}
      </Table>
    );
  }
}
const mapStateToProps = state => {
  return {
    stocks: stockSelector(state.stocks, state.filters),
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  addStock: stock => dispatch(addStock(stock)),
  sortBySymbol: () => dispatch(sortBySymbol()),
  sortByChange: () => dispatch(sortByChange()),
  sortByPrice: () => dispatch(sortByPrice())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableValues);
