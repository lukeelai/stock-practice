import {
  SORT_BY_SYMBOL,
  SORT_BY_PRICE,
  SORT_BY_VOLUME
} from "../actions/actionTypes";

const filtersReducerDefaultState = {
  sortBy: "",
  reverse: {
    symbol: false,
    change: false,
    price: false
  }
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
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
    case SORT_BY_VOLUME:
      return {
        ...state,
        sortBy: "volume",
        reverse: {
          ...state.reverse,
          volume: !state.reverse.volume
        }
      };
    default:
      return state;
  }
};
