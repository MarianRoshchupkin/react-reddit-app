import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { setTokenAsync } from "../store/token/tokenActions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export function useToken() {
  const token = useSelector<IInitialState, string>(state => state.token.token);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setTokenAsync());
  }, [token]);
}
