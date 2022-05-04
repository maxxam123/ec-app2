import { publicRequest } from '../requestMethod';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
} from './userRedux';
import { logoutProduct } from './cartRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  console.log('logout logout');
};

export const logpro = async (dispatch) => {
  dispatch(logoutProduct());
  console.log('logout product logout product');
};
