import React from "react";

const WatchListItemUpdate = props => {
  return <td>{props.convertDate(props.latestUpdate)} PST</td>;
};

export default WatchListItemUpdate;
