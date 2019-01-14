import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import catReducer from '../redux/reducers/cat'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      cat: catReducer
  }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
