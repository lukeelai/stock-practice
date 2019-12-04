import React from "react";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";

//Actions
import { removeWatch } from "../actions/watch";

//Components
import WatchListItem from "../components/Watch/WatchListItem";

export class WatchListItemContainer extends React.Component {
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
    firebase
      .database()
      .ref("watching")
      .orderByChild("symbol")
      .equalTo(this.props.symbol)
      .once("value", snapshot => {
        firebase
          .database()
          .ref("watching")
          .child(Object.keys(snapshot.val())[0])
          .remove()
          .then(() => {
            console.log(`Removed ${this.props.symbol}`);
          })
          .catch(e => {
            console.log(e);
          });
      });
  };

  tooltipToggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    return (
      <WatchListItem
        {...this.props}
        onUnwatch={this.onUnwatch}
        convertDate={this.convertDate}
        tooltipToggle={this.tooltipToggle}
        tooltipOpen={this.state.tooltipOpen}
        onRefresh={this.props.onRefresh}
      />
    );
  }
}

export default connect(undefined, { removeWatch })(WatchListItemContainer);
