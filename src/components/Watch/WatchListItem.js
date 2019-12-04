import React from "react";

//Components
import WatchListItemName from "./WatchListItemName";
import WatchListItemPrice from "./WatchListItemPrice";
import WatchListItemVolume from "./WatchListItemVolume";
import WatchListItemUpdate from "./WatchListItemUpdate";
import WatchListItemRemove from "./WatchListItemRemove";

const WatchListItem = props => {
  return (
    <tbody key={props.symbol}>
      <tr>
        <WatchListItemName {...props} />
        <WatchListItemPrice {...props} />
        <WatchListItemVolume {...props} />
        <WatchListItemUpdate {...props} />
        <WatchListItemRemove {...props} />
      </tr>
    </tbody>
  );
};

export default WatchListItem;
