import React from "react";
import { connect } from "react-redux";

//Components
import HomePage from "../components/Home/HomePage";

//Actions
import { setActiveTab } from "../actions/tab";

export class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.props.tab !== tab) this.props.setActiveTab(tab);
  }

  render() {
    return <HomePage {...this.props} toggle={this.toggle} />;
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  };
};

export default connect(
  mapStateToProps,
  { setActiveTab }
)(HomePageContainer);
