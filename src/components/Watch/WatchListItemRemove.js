import React from "react";
import { Button } from "reactstrap";

const WatchListItemRemove = props => {
  return (
    <td>
      <Button color="danger" onClick={props.onUnwatch}>
        remove
      </Button>
      <Button
        color="primary"
        onClick={() => {
          props.onRefresh(props.symbol, true);
        }}
      >
        refresh
      </Button>
    </td>
  );
};

export default WatchListItemRemove;
