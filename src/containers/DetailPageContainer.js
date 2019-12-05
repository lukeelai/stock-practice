import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { addDetail } from "../actions/details";

//Components
import DetailPage from "../components/Detail/DetailPage";

class DetailPageContainer extends React.Component {
  componentDidMount = () => {
    this.getStock(this.props.location.symbol);
  };

  getStock = stock => {
    const header = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    };
    const params = {
      token: process.env.REACT_APP_API_KEY
    };
    const uri = `https://cloud.iexapis.com/stable/stock/${stock}/batch?types=quote,news,chart&range=5y&last=10`;

    axios
      .get(uri, {
        params: params,
        header: header
      })
      .then(result => {
        if (result.data) this.props.addDetail(result.data);
        else this.props.addDetail(["no data"]);
      })
      .catch(e => {
        alert(e, "please enter a valid stock");
      });
  };

  //more details
  render() {
    return <DetailPage {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    details: state.details
  };
};

export default connect(mapStateToProps, { addDetail })(DetailPageContainer);
