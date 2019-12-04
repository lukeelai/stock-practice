import { SORT_BY_SYMBOL, SORT_BY_PRICE, SORT_BY_VOLUME } from "./actionTypes";

export const sortBySymbol = () => ({
  type: SORT_BY_SYMBOL
});

export const sortByPrice = () => ({
  type: SORT_BY_PRICE
});

export const sortByVolume = () => ({
  type: SORT_BY_VOLUME
});
