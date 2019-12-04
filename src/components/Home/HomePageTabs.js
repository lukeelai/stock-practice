import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const HomePageTabs = props => {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={props.tab === "1" ? "active" : "inactive"}
          onClick={() => {
            props.toggle("1");
          }}
        >
          Top Gainers
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={props.tab === "2" ? "active" : "inactive"}
          onClick={() => {
            props.toggle("2");
          }}
        >
          Watching
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default HomePageTabs;
