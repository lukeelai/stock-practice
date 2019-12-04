import React from "react";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";

//actions
import { addWatch } from "../actions/watch";

//components
import TableListItem from "../components/Top10/TableListItem";

export class TableListItemContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false
    };
  }

  onAddDB = result => {
    firebase
      .database()
      .ref("watching")
      .set(result)
      .then(() => console.log(`${result[result.length - 1].symbol} added`))
      .catch(e => console.log(e));
  };

  toWatch = () => {
    this.toWatchAsync().then(value => {
      this.onAddDB(value);
    });
  };

  toWatchAsync = async () => {
    await this.props.addWatch({
      symbol: this.props.symbol,
      companyName: this.props.companyName,
      latestPrice: this.props.latestPrice,
      volume:
        this.props.volume === null ? this.props.iexVolume : this.props.volume,
      previousClose: this.props.previousClose,
      latestUpdate: this.props.latestUpdate
    });
    return await this.props.watch;
  };

  tooltipToggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    return (
      <TableListItem
        {...this.props}
        toWatch={this.toWatch}
        tooltipToggle={this.tooltipToggle}
        tooltipOpen={this.state.tooltipOpen}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    watch: state.watch
  };
};

export default connect(mapStateToProps, { addWatch })(TableListItemContainer);
