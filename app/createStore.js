import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from './reducers/currencyReducer';
import amountReducer from './reducers/amountReducer';
import available from './reducers/availableCurrenciesReducer';

export default () => {
  const store = createStore(
    combineReducers({
      currencyReducer,
      amountReducer,
      available,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
