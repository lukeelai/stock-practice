import { ADD_WATCH, REMOVE_WATCH, UPDATE_WATCH } from "../actions/actionTypes";
const watchDefaultState = [];

export default (state = watchDefaultState, action) => {
  switch (action.type) {
    case ADD_WATCH:
      if (state.some(watch => watch.symbol === action.watch.symbol))
        return state;
      return [...state, action.watch];
    case UPDATE_WATCH:
      return state.map(watch => {
        if (action.updates.latestUpdate === watch.latestUpdate)
          console.log(`${watch.symbol} is up to date`);
        if (
          watch.symbol === action.symbol &&
          action.updates.latestUpdate !== watch.latestUpdate
        ) {
          return {
            ...watch,
            ...action.updates
          };
        } else {
          return watch;
        }
      });
    case REMOVE_WATCH:
      return state.filter(({ symbol }) => symbol !== action.symbol);
    default:
      return state;
  }
};
