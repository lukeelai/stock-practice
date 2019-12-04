import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePageContainer from "../containers/HomePageContainer";
import DetailPageContainer from "../containers/DetailPageContainer";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePageContainer} exact={true} />
        <Route
          path="/detail/:id"
          component={DetailPageContainer}
          exact={true}
        />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
