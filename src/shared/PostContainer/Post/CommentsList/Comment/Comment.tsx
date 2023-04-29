import React from 'react';
import styles from './comment.css';
import { CommentControls } from "./CommentControls";
import { CommentTextContent } from "./CommentTextContent";

interface ICommentProps {
  author: string;
  body: string;
  replies: object | string | undefined;
  loading: boolean;
  errorLoading: string;
}

export function Comment(props: ICommentProps) {
  return (
    <li className={styles.comment}>
      <CommentControls />
      <CommentTextContent
        author={props.author}
        body={props.body}
        replies={props.replies}
        loading={props.loading}
        errorLoading={props.errorLoading}
      />
    </li>
  );
}
