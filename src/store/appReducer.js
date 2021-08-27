import { actionTypes } from "./actionTypes";

const initialState = {
  boot: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOT:
      return { ...state, boot: action.payload };
    default:
      return state;
  }
};

export default appReducer;
