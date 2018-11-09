import { combineReducers } from 'redux';

import auth from './states/auth/reducer';

const reducers = combineReducers({
  auth,
});

export default reducers;
