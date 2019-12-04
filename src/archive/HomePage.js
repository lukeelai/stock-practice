import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import StockTable from "./StockTable";
import WatchStockContainer from "../containers/WatchStockContainer";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={this.state.activeTab === "1" ? "active" : "inactive"}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Top Gainers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === "2" ? "active" : "inactive"}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Watching
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <StockTable />
          </TabPane>
          <TabPane tabId="2">
            <WatchStockContainer />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default HomePage;
