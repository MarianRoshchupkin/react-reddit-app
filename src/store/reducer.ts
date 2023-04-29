import {
  SET_TOKEN,
  SET_TOKEN_ERROR,
  SET_TOKEN_SUCCESS,
  SetTokenAction,
  SetTokenErrorAction,
  SetTokenSuccessAction
} from "./token/tokenActions";
import {
  SET_POSTS,
  SET_POSTS_ERROR,
  SET_POSTS_SUCCESS,
  SetPostsAction,
  SetPostsErrorAction,
  SetPostsSuccessAction
} from "./posts/postsActions";
import {
  SET_USER_DATA,
  SET_USER_DATA_ERROR,
  SET_USER_DATA_SUCCESS,
  SetUserDataAction,
  SetUserDataErrorAction,
  SetUserDataSuccessAction
} from "./userData/userDataAction";
import {
  SET_COMMENTS,
  SET_COMMENTS_ERROR,
  SET_COMMENTS_SUCCESS,
  SetCommentsAction,
  SetCommentsErrorAction,
  SetCommentsSuccessAction
} from "./comments/commentsActions";
import {ITokenState, tokenReducer} from "./token/tokenReducer";
import {IUserDataState, userDataReducer} from "./userData/userDataReducer";
import {IPostsState, postsReducer} from "./posts/postsReducer";
import {commentsReducer, ICommentsState} from "./comments/commentsReducer";
import {ILoadMoreState, loadMoreReducer} from "./loadMore/loadMoreReducer";
import {SET_LOAD_MORE, SetLoadMoreAction} from "./loadMore/loadMoreActions";

export interface IInitialState {
  comments: ICommentsState;
  loadMore: ILoadMoreState;
  token: ITokenState;
  posts: IPostsState;
  userData: IUserDataState;
}

export const initialState: IInitialState = {
  comments: {
    comments: [],
    loading: false,
    errorLoading: ''
  },
  loadMore: {
    loadMore: 0
  },
  token: {
    token: '',
    loading: false,
    errorLoading: ''
  },
  posts: {
    posts: [],
    after: { after: 0 },
    loading: false,
    errorLoading: ''
  },
  userData: {
    userData: { name: '', iconImg: '' },
    loading: false,
    errorLoading: ''
  },
}

type Actions = SetCommentsAction
  | SetCommentsSuccessAction
  | SetCommentsErrorAction
  | SetLoadMoreAction
  | SetTokenAction
  | SetTokenSuccessAction
  | SetTokenErrorAction
  | SetPostsAction
  | SetPostsSuccessAction
  | SetPostsErrorAction
  | SetUserDataAction
  | SetUserDataSuccessAction
  | SetUserDataErrorAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_COMMENTS:
    case SET_COMMENTS_SUCCESS:
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        comments: commentsReducer(state.comments, action)
      }
    case SET_LOAD_MORE:
      return {
        ...state,
        loadMore: loadMoreReducer(state.loadMore, action)
      }
    case SET_TOKEN:
    case SET_TOKEN_SUCCESS:
    case SET_TOKEN_ERROR:
      return {
        ...state,
        token: tokenReducer(state.token, action)
      }
    case SET_POSTS:
    case SET_POSTS_SUCCESS:
    case SET_POSTS_ERROR:
      return {
        ...state,
        posts: postsReducer(state.posts, action)
      }
    case SET_USER_DATA:
    case SET_USER_DATA_SUCCESS:
    case SET_USER_DATA_ERROR:
      return {
        ...state,
        userData: userDataReducer(state.userData, action)
      }
    default:
      return state;
  }
};
