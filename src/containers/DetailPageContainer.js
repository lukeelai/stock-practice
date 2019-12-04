import React from "react";

//Components
import DetailPage from "../components/Detail/DetailPage";

class DetailPageContainer extends React.Component {
  render() {
    return <DetailPage {...this.props} />;
  }
}

export default DetailPageContainer;
