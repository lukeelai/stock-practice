import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addStock } from "../actions/stocks";
import { sortBySymbol, sortByChange, sortByPrice } from "../actions/filters";
import TableList from "../components/Top10/TableList";
import stockSelector from "../selectors/stocks";

export class TabeListContainer extends React.Component {
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
        const filtered = result.data.filter(result => {
          return result != null;
        });
        if (!filtered.some(item => item.symbol === this.props.symbol))
          filtered.map(stock => {
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
  render() {
    return (
      <TableList
        {...this.props}
        onClickSymbol={this.onClickSymbol}
        onClickChange={this.onClickChange}
        onClickPrice={this.onClickPrice}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    stocks: stockSelector(state.stocks, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps, {
  addStock,
  sortBySymbol,
  sortByChange,
  sortByPrice
})(TabeListContainer);
