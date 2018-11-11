import { LOGIN, LOGOUT } from './constants';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  tokenType: '',
  createdAt: '',
  expiresIn: '',
  userId: '',
};

function loginHandler(state, action) {
  return Object.assign({}, state, {
    isLoggedIn: true,
    ...action.payload,
  });
}

function logoutHandler(state) {
  return Object.assign({}, state, initialState);
}


const ACTION_HANDLERS = {
  [LOGIN]: loginHandler,
  [LOGOUT]: logoutHandler,
};

export default function authReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
