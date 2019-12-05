import { ADD_DETAIL, REMOVE_DETAIL } from "../actions/actionTypes";

const detailDefaultState = [];

export default (state = detailDefaultState, action) => {
  switch (action.type) {
    case ADD_DETAIL:
      if (state.some(stock => stock.symbol === action.detail.quote.symbol))
        return state;
      return [...state, action.detail];
    case REMOVE_DETAIL:
      return state.filter(({ symbol }) => symbol !== action.symbol);
    default:
      return state;
  }
};
