import { useEffect, useRef } from 'react';
import { IPostsData } from "../shared/CardsList";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { setPostsAsync } from "../store/posts/postsActions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export function usePostsData() {
  const token = useSelector<IInitialState, string>(state => state.token.token);
  const posts = useSelector<IInitialState, IPostsData[]>(state => state.posts.posts);
  const nextAfter = useSelector<IInitialState, object>(state => state.posts.after);
  const loading = useSelector<IInitialState, boolean>(state => state.posts.loading);
  const errorLoading = useSelector<IInitialState, string>(state => state.posts.errorLoading);
  const loadMoreCount = useSelector<IInitialState, number>(state => state.loadMore.loadMore);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (loadMoreCount !== 3) {
        if (entries[0].isIntersecting) {
          dispatch(setPostsAsync());
        }
      }
    }, {
      rootMargin: '10px'
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [nextAfter, loadMoreCount, token]);

  return {
    posts,
    loading,
    errorLoading,
    bottomOfList,
    loadMoreCount
  };
}
