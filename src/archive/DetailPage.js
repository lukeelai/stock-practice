import React from "react";
import StockDetailContainer from "../containers/StockDetailContainer";

class DetailPage extends React.Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.location.symbol} - {this.props.location.name}
        </h3>
        <StockDetailContainer symbol={this.props.location.symbol} />
      </div>
    );
  }
}

export default DetailPage;
