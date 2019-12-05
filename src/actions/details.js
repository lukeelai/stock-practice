import { ADD_DETAIL, REMOVE_DETAIL } from "./actionTypes";

export const addDetail = detail => ({
  type: ADD_DETAIL,
  detail
});

export const removeDetail = ({ symbol } = {}) => ({
  type: REMOVE_DETAIL,
  symbol
});
