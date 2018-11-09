import { LOGIN, LOGOUT } from './constants';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export default {
  login,
  logout,
};
