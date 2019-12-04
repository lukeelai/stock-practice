import { ADD_STOCK, REMOVE_STOCK } from "./actionTypes";

export const addStock = stock => ({
  type: ADD_STOCK,
  stock
});

export const removeStock = ({ symbol } = {}) => ({
  type: REMOVE_STOCK,
  symbol
});
