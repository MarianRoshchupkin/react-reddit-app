import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import axios from "axios";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_DATA_SUCCESS = 'SET_USER_DATA_SUCCESS';
export const SET_USER_DATA_ERROR = 'SET_USER_DATA_ERROR';

export type SetUserDataAction = {
  type: typeof SET_USER_DATA;
}
export type SetUserDataSuccessAction = {
  type: typeof SET_USER_DATA_SUCCESS;
  userData: IUserData;
}
export type SetUserDataErrorAction = {
  type: typeof SET_USER_DATA_ERROR;
  errorLoading: string;
}

export const setUserData: ActionCreator<SetUserDataAction> = () => ({
  type: SET_USER_DATA,
})
export const setUserDataSuccess: ActionCreator<SetUserDataSuccessAction> = (userData) => ({
  type: SET_USER_DATA_SUCCESS,
  userData,
})
export const setUserDataError: ActionCreator<SetUserDataErrorAction> = (errorLoading: string) => ({
  type: SET_USER_DATA_ERROR,
  errorLoading
})

export const setUserDataAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(setUserData());

  axios.get('https://oauth.reddit.com/api/v1/me.json', {
    headers: {Authorization: `bearer ${getState().token.token}`}
  })
    .then((res) => {
      const userData = res.data;
      dispatch(setUserDataSuccess(userData));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setUserDataError(String(error)))
    })
}
