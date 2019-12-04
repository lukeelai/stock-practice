import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByPrice } from "../actions/filters";
import StockFilter from "../components/Stock/StockFilter";

export class StockFilterContainer extends React.Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return <StockFilter {...this.props} onTextChange={this.onTextChange} />;
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
  filters: state.filters
});

export default connect(
  mapStateToProps,
  { setTextFilter, sortByPrice }
)(StockFilterContainer);
