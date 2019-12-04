import React from "react";
import { TabContent, TabPane } from "reactstrap";

//Components
import StockTable from "../Stock/StockTable";

//Containers
import WatchStockContainer from "../../containers/WatchStockContainer";

const HomePageTabContent = props => {
  return (
    <TabContent activeTab={props.tab}>
      <TabPane tabId="1">
        <StockTable />
      </TabPane>
      <TabPane tabId="2">
        <WatchStockContainer />
      </TabPane>
    </TabContent>
  );
};
export default HomePageTabContent;
