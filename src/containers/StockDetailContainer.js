import React from "react";
import { connect } from "react-redux";
import StockDetail from "../components/Detail/StockDetail";

class StockDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.convertDate = this.convertDate.bind(this);
  }

  convertDate = epochTime => {
    var d = new Date(epochTime);
    return d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  };

  render() {
    return <StockDetail {...this.props} convertDate={this.convertDate} />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    stocks: state.stocks.filter(stock => stock.symbol === props.symbol),
    watch: state.watch.filter(stock => stock.symbol === props.symbol),
    details: state.details
  };
};

export default connect(mapStateToProps)(StockDetailContainer);
