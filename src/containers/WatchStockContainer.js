import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";

//Actions
import { addWatch, updateWatch } from "../actions/watch";
import {
  sortBySymbol,
  sortByPrice,
  sortByVolume
} from "../actions/watchFilter.js";

//Selectors
import watchSelector from "../selectors/watch";

//Components
import WatchStock from "../components/Watch/WatchStock";

export class WatchStockContainer extends React.Component {
  componentDidMount() {
    firebase
      .database()
      .ref("watching")
      .once("value")
      .then(snapshot => {
        if (snapshot.val().length > 0) {
          snapshot.val().map(stock => {
            if (
              new Date(new Date().getTime() - 15 * 60000).getTime() >
                stock.latestUpdate &&
              this.props.watch.length > 0
            )
              return this.getStock(stock.symbol, true);
            else if (this.props.watch.length < 1)
              return this.getStock(stock.symbol, false);
            return console.log(`${stock.symbol} is up to date`);
          });
        }
      });
  }

  getStock = (stock, update) => {
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
      .get(`https://cloud.iexapis.com/stable/stock/${stock}/quote`, {
        params: params,
        header: header
      })
      .then(result => {
        if (result.data) {
          if (update) {
            const toUpdate = this.props.watch.filter(watch => {
              return watch.symbol === stock;
            });
            this.props.updateWatch(result.data.symbol, result.data);
            if (toUpdate[0].latestUpdate !== result.data.latestUpdate)
              this.onUpdateDB(result.data);
          } else {
            this.props.addWatch(result.data);
            this.onAddDB(this.props.watch);
          }
        } else {
          alert("please enter a valid stock");
        }
      })
      .catch(e => {
        alert(e, "please enter a valid stock");
      });
  };

  onKeyPress = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      this.getStock(e.target.value, false);
      e.target.value = "";
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

  onAddDB = result => {
    firebase
      .database()
      .ref("watching")
      .set(result)
      .then(() => {
        console.log(`${result[result.length - 1].symbol} added`);
      })
      .catch(e => console.log(e));
  };

  onUpdateDB = result => {
    firebase
      .database()
      .ref("watching")
      .orderByChild("symbol")
      .equalTo(result.symbol)
      .once("value", snapshot => {
        firebase
          .database()
          .ref("watching")
          .child(Object.keys(snapshot.val())[0])
          .update(result)
          .then(() => {
            console.log(`Updated ${result.symbol}`);
          })
          .catch(e => {
            console.log(e);
          });
      });
  };

  render() {
    return (
      <WatchStock
        {...this.props}
        onKeyPress={this.onKeyPress}
        onClickSymbol={this.onClickSymbol}
        onClickPrice={this.onClickPrice}
        onClickVolume={this.onClickVolume}
        onRefresh={this.getStock}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    watch: watchSelector(state.watch, state.watchFilter),
    watchFilter: state.watchFilter
  };
};

export default connect(mapStateToProps, {
  addWatch,
  updateWatch,
  sortBySymbol,
  sortByPrice,
  sortByVolume
})(WatchStockContainer);
