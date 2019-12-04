import { ADD_STOCK, REMOVE_STOCK } from "../actions/actionTypes";

const stockDefaultState = [];

export default (state = stockDefaultState, action) => {
  switch (action.type) {
    case ADD_STOCK:
      if (state.some(stock => stock.symbol === action.stock.symbol))
        return state;
      return [...state, action.stock];
    case REMOVE_STOCK:
      return state.filter(({ symbol }) => symbol !== action.symbol);
    default:
      return state;
  }
};
