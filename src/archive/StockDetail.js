import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

class StockDetail extends React.Component {
  constructor(props) {
    super(props);
    this.convertDate = this.convertDate.bind(this);
  }

  convertDate = epochTime => {
    var d = new Date(epochTime);
    return d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  };

  render() {
    return (
      <Table>
        <tbody>
          <tr>
            <th scope="row">Price</th>
            <td>
              $
              {this.props.stocks.length === 0
                ? this.props.watch[0].latestPrice.toFixed(2)
                : this.props.stocks[0].latestPrice.toFixed(2)}
              <h6
                className={
                  (this.props.stocks.length === 0
                    ? (
                        this.props.watch[0].latestPrice -
                        this.props.watch[0].previousClose
                      ).toFixed(2)
                    : (
                        this.props.stocks[0].latestPrice -
                        this.props.stocks[0].previousClose
                      ).toFixed(2)) > 0
                    ? "text-success"
                    : "text-danger"
                }
                style={{ display: "inline", marginLeft: "5px" }}
              >
                (
                {(this.props.stocks.length === 0
                  ? (
                      this.props.watch[0].latestPrice -
                      this.props.watch[0].previousClose
                    ).toFixed(2)
                  : (
                      this.props.stocks[0].latestPrice -
                      this.props.stocks[0].previousClose
                    ).toFixed(2)) > 0
                  ? "+"
                  : ""}
                {this.props.stocks.length === 0
                  ? (
                      this.props.watch[0].latestPrice -
                      this.props.watch[0].previousClose
                    ).toFixed(2)
                  : (
                      this.props.stocks[0].latestPrice -
                      this.props.stocks[0].previousClose
                    ).toFixed(2)}
                )
              </h6>
            </td>
          </tr>
          <tr>
            <th scope="row">Percent Change</th>
            <td
              className={
                (this.props.stocks.length === 0
                  ? (
                      this.props.watch[0].latestPrice -
                      this.props.watch[0].previousClose
                    ).toFixed(2)
                  : (
                      this.props.stocks[0].latestPrice -
                      this.props.stocks[0].previousClose
                    ).toFixed(2)) > 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              {(this.props.stocks.length === 0
                ? (
                    this.props.watch[0].latestPrice -
                    this.props.watch[0].previousClose
                  ).toFixed(2)
                : (
                    this.props.stocks[0].latestPrice -
                    this.props.stocks[0].previousClose
                  ).toFixed(2)) > 0
                ? "+"
                : ""}
              {this.props.stocks.length === 0
                ? (this.props.watch[0].changePercent * 100).toFixed(2)
                : (this.props.stocks[0].changePercent * 100).toFixed(2)}
              %
            </td>
          </tr>
          <tr>
            <th scope="row">Previous Close</th>
            <td>
              $
              {this.props.stocks.length === 0
                ? this.props.watch[0].previousClose
                : this.props.stocks[0].previousClose}
            </td>
          </tr>
          <tr>
            <th scope="row">PE Ratio</th>
            <td>
              {this.props.stocks.length === 0
                ? this.props.watch[0].peRatio
                : this.props.stocks[0].peRatio}
            </td>
          </tr>
          <tr>
            <th scope="row">Last Updated</th>
            <td className="text-primary">
              {this.props.stocks.length === 0
                ? this.convertDate(this.props.watch[0].latestUpdate)
                : this.convertDate(this.props.stocks[0].latestUpdate)}{" "}
              (PST)
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    stocks: state.stocks.filter(stock => stock.symbol === props.symbol),
    watch: state.watch.filter(stock => stock.symbol === props.symbol)
  };
};

export default connect(mapStateToProps)(StockDetail);
