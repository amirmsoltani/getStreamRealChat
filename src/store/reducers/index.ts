import { combineReducers } from "redux";
import LayoutReducers, { initialLayoutReducers } from "./layoutReducer";

export const combinedReducers = combineReducers({
  layout: LayoutReducers,
});

export const initialState = {
  layout: initialLayoutReducers,
};
