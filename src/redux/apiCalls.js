// import { publicRequest } from '../requestMethod';
import axios from 'axios';
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
    const res = await axios.post('http://localhost:5000/api/auth/login', user);
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
