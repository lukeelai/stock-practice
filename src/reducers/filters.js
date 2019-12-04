import {
  SET_TEXT_FILTER,
  SORT_BY_SYMBOL,
  SORT_BY_PRICE,
  SORT_BY_CHANGE
} from "../actions/actionTypes.js";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "change",
  reverse: {
    symbol: false,
    change: false,
    price: false
  }
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORT_BY_SYMBOL:
      return {
        ...state,
        sortBy: "symbol",
        reverse: {
          ...state.reverse,
          symbol: !state.reverse.symbol
        }
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        sortBy: "price",
        reverse: {
          ...state.reverse,
          price: !state.reverse.price
        }
      };
    case SORT_BY_CHANGE:
      return {
        ...state,
        sortBy: "change",
        reverse: {
          ...state.reverse,
          change: !state.reverse.change
        }
      };
    default:
      return state;
  }
};
