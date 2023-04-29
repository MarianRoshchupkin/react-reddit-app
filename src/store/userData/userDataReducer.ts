import { initialState } from "../reducer";
import {
  IUserData,
  SET_USER_DATA, SET_USER_DATA_ERROR,
  SET_USER_DATA_SUCCESS,
  SetUserDataAction,
  SetUserDataErrorAction,
  SetUserDataSuccessAction
} from "./userDataAction";

export interface IUserDataState {
  userData: IUserData;
  loading: boolean;
  errorLoading: string;
}

type UserDataActions = SetUserDataAction | SetUserDataSuccessAction | SetUserDataErrorAction;

export const userDataReducer = (state = initialState.userData, action: UserDataActions): IUserDataState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        loading: false
      }
    case SET_USER_DATA_ERROR:
      return {
        ...state,
        errorLoading: action.errorLoading,
        loading: false
      }
    default:
      return state;
  }
}
