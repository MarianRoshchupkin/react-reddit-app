import { initialState } from "../reducer";
import {
  SET_TOKEN,
  SET_TOKEN_ERROR,
  SET_TOKEN_SUCCESS,
  SetTokenAction,
  SetTokenErrorAction,
  SetTokenSuccessAction
} from "./tokenActions";

export interface ITokenState {
  token: string;
  loading: boolean;
  errorLoading: string;
}

type TokenActions = SetTokenAction | SetTokenSuccessAction | SetTokenErrorAction

export const tokenReducer = (state = initialState.token, action: TokenActions): ITokenState => {
  switch(action.type) {
    case SET_TOKEN:
      return {
        ...state,
        loading: true
      };
    case SET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false
      }
    case SET_TOKEN_ERROR:
      return {
        ...state,
        errorLoading: action.errorLoading,
        loading: false
      }
    default:
      return state;
  }
}
