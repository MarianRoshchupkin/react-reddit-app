import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { IUserData, setUserDataAsync } from "../store/userData/userDataAction";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export function useUserData() {
  const token = useSelector<IInitialState, string>(state => state.token.token);
  const userData = useSelector<IInitialState, IUserData>(state => state.userData.userData);
  const loading = useSelector<IInitialState, boolean>(state => state.token.loading);
  const errorLoading = useSelector<IInitialState, string>(state => state.userData.errorLoading);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(setUserDataAsync());
    }
  }, []);

  return {
    userData,
    loading,
    errorLoading
  };
}
