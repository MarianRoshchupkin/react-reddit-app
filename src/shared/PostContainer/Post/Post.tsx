import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
import { PostPreview } from "./PostPreview";
import { PostControls } from "./PostControls";
import { CommentsList } from "./CommentsList";
import { PostForm } from "./PostForm";
import { IPostComments } from "../../../hooks/usePostComments";
import { IPostsData } from "../../CardsList";
import { useNavigate } from 'react-router-dom';

interface IPostProps {
  posts: IPostsData;
  comments: IPostComments[];
  loading: boolean;
  errorLoading: string;
  id: string;
  node: Element;
}

export function Post(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <PostControls
        author={props.posts.author}
        id={props.id}
        karma={props.posts.ups}
        title={props.posts.title}
      />
      <PostPreview preview={props.posts.preview} />
      <PostForm />
      <CommentsList
        comments={props.comments}
        loading={props.loading}
        errorLoading={props.errorLoading}
      />
    </div>
  ), props.node);
}
