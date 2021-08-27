import { actionTypes } from "./actionTypes";

export const setBotted = bootStatus => ({
  type: actionTypes.SET_BOOT,
  payload: bootStatus
});