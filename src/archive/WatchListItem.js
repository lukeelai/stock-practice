import React from "react";
import { Button, Tooltip } from "reactstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeWatch } from "../actions/watch";

export class WatchListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false
    };
  }
  convertDate = epochTime => {
    var d = new Date(epochTime);
    return d.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles"
    });
  };

  onUnwatch = () => {
    this.props.removeWatch({ symbol: this.props.symbol });
  };

  tooltipToggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    return (
      <tbody key={this.props.symbol}>
        <tr>
          <th scope="row">
            <NavLink
              to={{
                pathname: `/detail/${this.props.symbol}`,
                symbol: this.props.symbol,
                name: this.props.companyName
              }}
              id={this.props.symbol + "-watch"}
            >
              {this.props.symbol}
              <Tooltip
                placement="right"
                isOpen={this.state.tooltipOpen}
                target={this.props.symbol + "-watch"}
                toggle={this.tooltipToggle}
              >
                {this.props.companyName}
              </Tooltip>
            </NavLink>
          </th>
          <td>
            ${this.props.latestPrice ? this.props.latestPrice.toFixed(2) : ""}
            <h6
              className={
                this.props.latestPrice - this.props.previousClose > 0
                  ? "text-success"
                  : "text-danger"
              }
              style={{ display: "inline", marginLeft: "5px" }}
            >
              (
              {this.props.latestPrice - this.props.previousClose > 0 ? "+" : ""}
              {this.props.latestPrice - this.props.previousClose
                ? (this.props.latestPrice - this.props.previousClose).toFixed(2)
                : ""}
              )
            </h6>
          </td>
          <td>
            {this.props.volume === null
              ? this.props.iexVolume
              : this.props.volume}
          </td>
          <td>{this.convertDate(this.props.latestUpdate)} PST</td>
          <td>
            <Button color="danger" onClick={this.onUnwatch}>
              unwatch
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeWatch: data => dispatch(removeWatch(data))
});

export default connect(
  undefined,
  mapDispatchToProps
)(WatchListItem);
