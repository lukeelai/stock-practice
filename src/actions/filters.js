import {
  SET_TEXT_FILTER,
  SORT_BY_SYMBOL,
  SORT_BY_CHANGE,
  SORT_BY_PRICE
} from "./actionTypes";

export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  text
});
export const sortBySymbol = () => ({
  type: SORT_BY_SYMBOL
});

export const sortByChange = () => ({
  type: SORT_BY_CHANGE
});
export const sortByPrice = () => ({
  type: SORT_BY_PRICE
});
