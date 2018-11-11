import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

// create logger and enable it just for dev environment
const logger = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
