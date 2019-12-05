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
    const uri = `https://cloud.iexapis.com/stable/stock/${stock}/batch?types=quote,news,chart&range=1y&last=10`;

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
        e.toString().includes("402") ? alert("Request limit hit") : alert(e);
        if (window.location.pathname !== "/") window.location.href = "/";
      });
  };

  //more details
  render() {
    //process the charts
    let monthlyChart = this.props.details[0]
      ? this.props.details[0].chart.filter((chart, index) => {
          return (
            !index ||
            chart.date.split("-")[1] !==
              this.props.details[0].chart[index - 1].date.split("-")[1] ||
            index === this.props.details[0].chart.length - 1
          );
        })
      : [];
    monthlyChart = monthlyChart.map(chart => {
      return { x: chart.label.split(" ")[0], y: chart.open };
    });
    return <DetailPage {...this.props} monthlyChart={monthlyChart} />;
  }
}

const mapStateToProps = state => {
  return {
    details: state.details
  };
};

export default connect(mapStateToProps, { addDetail })(DetailPageContainer);
