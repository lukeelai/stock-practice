import { ADD_WATCH, REMOVE_WATCH, UPDATE_WATCH } from "./actionTypes";

export const addWatch = watch => ({
  type: ADD_WATCH,
  watch
});

export const updateWatch = (symbol, updates) => ({
  type: UPDATE_WATCH,
  symbol,
  updates
});

export const removeWatch = ({ symbol } = {}) => ({
  type: REMOVE_WATCH,
  symbol
});
