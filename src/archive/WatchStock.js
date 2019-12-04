import React from "react";
import { InputGroup, InputGroupText, Input, Table } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { addWatch } from "../actions/watch";
import WatchListItemContainer from "../containers/WatchListItemContainer";
import {
  sortBySymbol,
  sortByPrice,
  sortByVolume
} from "../actions/watchFilter.js";
import watchSelector from "../selectors/watch";

export class WatchStock extends React.Component {
  onKeyPress = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
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
        .get(`https://cloud.iexapis.com/stable/stock/${e.target.value}/quote`, {
          params: params,
          header: header
        })
        .then(result => {
          if (result.data) {
            this.props.addWatch(result.data);
          } else {
            alert("please enter a valid stock");
          }
        })
        .catch(e => {
          alert("please enter a valid stock");
        });
    }
  };

  onClickSymbol = () => {
    this.props.sortBySymbol();
  };

  onClickPrice = () => {
    this.props.sortByPrice();
  };

  onClickVolume = () => {
    this.props.sortByVolume();
  };

  render() {
    return (
      <div>
        <InputGroup className="searchbox">
          <InputGroupText>search</InputGroupText>
          <Input
            placeholder="e.g. AAPL"
            type="text"
            onKeyPress={this.onKeyPress}
          />
        </InputGroup>
        <Table>
          <thead>
            <tr>
              <th onClick={this.onClickSymbol}>Symbol</th>
              <th onClick={this.onClickPrice}>Price</th>
              <th onClick={this.onClickVolume}>Volume</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          {this.props.watch.length === 0 ? (
            <tbody />
          ) : (
            this.props.watch.map(stock => {
              return <WatchListItemContainer key={stock.symbol} {...stock} />;
            })
          )}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watch: watchSelector(state.watch, state.watchFilter),
    watchFilter: state.watchFilter
  };
};

const mapDispatchToProps = dispatch => ({
  addWatch: stock => dispatch(addWatch(stock)),
  sortBySymbol: () => dispatch(sortBySymbol()),
  sortByPrice: () => dispatch(sortByPrice()),
  sortByVolume: () => dispatch(sortByVolume())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchStock);
