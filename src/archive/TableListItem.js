import React from "react";
import { Button, Tooltip } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addWatch } from "../actions/watch";

export class TableListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false
    };
  }
  toWatch = () => {
    this.props.addWatch({
      symbol: this.props.symbol,
      companyName: this.props.companyName,
      latestPrice: this.props.latestPrice,
      volume:
        this.props.volume === null ? this.props.iexVolume : this.props.volume,
      previousClose: this.props.previousClose,
      latestUpdate: this.props.latestUpdate
    });
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
          <th scope="row" onClick={this.toWatch}>
            <span id={this.props.symbol}>
              {this.props.symbol}
              <Tooltip
                placement="right"
                isOpen={this.state.tooltipOpen}
                target={this.props.symbol}
                toggle={this.tooltipToggle}
              >
                {this.props.companyName}
              </Tooltip>
            </span>
          </th>
          <td>
            {this.props.changePercent
              ? (this.props.changePercent * 100).toFixed(2)
              : ""}
            %
          </td>
          <td>
            ${this.props.latestPrice ? this.props.latestPrice.toFixed(2) : ""}
            <h6
              className={"text-success"}
              style={{ display: "inline", marginLeft: "5px" }}
            >
              (+{this.props.change ? this.props.change.toFixed(2) : ""})
            </h6>
          </td>
          <td>
            <NavLink
              to={{
                pathname: `/detail/${this.props.symbol}`,
                symbol: this.props.symbol,
                name: this.props.companyName
              }}
            >
              <Button color="info">info</Button>{" "}
            </NavLink>
          </td>
        </tr>
      </tbody>
    );
  }
}

const mapStateToProps = state => {
  return {
    watch: state.watch
  };
};

// const mapDispatchToProps = dispatch => ({
//   addWatch: stock => dispatch(addWatch(stock))
// });

export default connect(
  mapStateToProps,
  { addWatch }
)(TableListItem);
