import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { setCommentsAsync } from "../store/comments/commentsActions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface IPostComments {
  author: string;
  body: string;
  created: number;
  id: string;
  key: string;
  replies: object | string | undefined;
}

export interface IPostCommentsObjects {
  kind: object;
  data: IPostComments;
}

export function usePostComments(postId: string) {
  const comments = useSelector<IInitialState, IPostComments[]>(state => state.comments.comments);
  const loading = useSelector<IInitialState, boolean>(state => state.comments.loading);
  const errorLoading = useSelector<IInitialState, string>(state => state.comments.errorLoading);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setCommentsAsync(postId)());
  }, []);

  return {
    comments,
    loading,
    errorLoading
  };
}
