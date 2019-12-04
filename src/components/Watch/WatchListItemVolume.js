import React from "react";

const WatchListItemVolume = props => {
  return <td>{props.volume === null ? props.iexVolume : props.volume}</td>;
};

export default WatchListItemVolume;
