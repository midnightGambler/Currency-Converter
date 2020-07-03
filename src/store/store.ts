import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currenciesReducer } from "./reducers/currenciesReducer";

export const store = createStore(currenciesReducer, applyMiddleware(thunk));
