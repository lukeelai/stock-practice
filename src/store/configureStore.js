import { createStore, combineReducers } from "redux";

//Reducers
import stocks from "../reducers/stocks";
import filters from "../reducers/filters";
import watch from "../reducers/watch";
import watchFilter from "../reducers/watchFilter";
import tab from "../reducers/tab";
import details from "../reducers/details";

export default () => {
  const store = createStore(
    combineReducers({ stocks, filters, watch, watchFilter, tab, details }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
