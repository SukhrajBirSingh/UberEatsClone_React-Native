import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import rideReducer from "./rideReducer";

let reducers = combineReducers({
  cartReducer: cartReducer,
  rideReducer: rideReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
