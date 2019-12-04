import React from "react";

//Components
import HomePageTabs from "./HomePageTabs";
import HomePageTabContent from "./HomePageTabContent";

const HomePage = props => {
  return (
    <div>
      <HomePageTabs {...props} />
      <HomePageTabContent {...props} />
    </div>
  );
};

export default HomePage;
