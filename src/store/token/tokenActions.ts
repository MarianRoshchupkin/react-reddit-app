import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {IInitialState} from "../reducer";

export const SET_TOKEN = 'SET_TOKEN';
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_ERROR = 'SET_TOKEN_ERROR';

export type SetTokenAction = {
  type: typeof SET_TOKEN;
}
export type SetTokenSuccessAction = {
  type: typeof SET_TOKEN_SUCCESS;
  token: string;
}
export type SetTokenErrorAction = {
  type: typeof SET_TOKEN_ERROR;
  errorLoading: string;
}

export const setToken: ActionCreator<SetTokenAction> = () => ({
  type: SET_TOKEN,
})
export const setTokenSuccess: ActionCreator<SetTokenSuccessAction> = (token: string) => ({
  type: SET_TOKEN_SUCCESS,
  token
})
export const setTokenError: ActionCreator<SetTokenErrorAction> = (errorLoading: string) => ({
  type: SET_TOKEN_ERROR,
  errorLoading
})

export const setTokenAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  dispatch(setToken());

  if (window.__token__) {
    dispatch(setTokenSuccess(window.__token__))
  }

  dispatch(setTokenError('Unable to get the token'));
}
