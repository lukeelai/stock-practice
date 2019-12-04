import React from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupText, Input } from "reactstrap";
import { setTextFilter, sortByPrice } from "../actions/filters";

export class StockFilter extends React.Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <InputGroup className="searchbox">
          <InputGroupText>filter</InputGroupText>
          <Input
            placeholder={
              this.props.stocks.length > 0
                ? `e.g. ${this.props.stocks[0].symbol}`
                : "e.g. AAPL"
            }
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </InputGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByPrice: () => dispatch(sortByPrice())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockFilter);
