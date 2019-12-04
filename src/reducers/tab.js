import { SET_ATCTIVE_TAB } from "../actions/actionTypes";

const tabDefaultState = "1";

export default (state = tabDefaultState, action) => {
  switch (action.type) {
    case SET_ATCTIVE_TAB:
      return (state = action.activeTab);
    default:
      return state;
  }
};
