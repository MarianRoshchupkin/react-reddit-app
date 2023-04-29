import React from 'react';
import styles from './commenttextcontent.css';
import { CommentBody } from "./CommentBody";
import { CommentMetaData } from "./CommentMetaData";
import { CommentsList } from "../../CommentsList";
import { CommentMenu } from "../CommentMenu";
import { IPostComments } from "../../../../../../hooks/usePostComments";
import { getAndFilterCommentsData } from "../../../../../../utils/react/getAndFilterCommentsData";
import { generateRandomString } from "../../../../../../utils/react/generateRandomIndex";

const retrieveCommentsValue = (replies: object | string | undefined): IPostComments[] | string => {
  let comments: IPostComments[] | string;

  if (replies === '' || replies === undefined) {
    comments = '';
  } else {
    comments = getAndFilterCommentsData(replies);
  }

  return comments;
}

interface ICommentTextContentProps {
  author: string;
  body: string;
  replies: object | string | undefined;
  loading: boolean;
  errorLoading: string;
}

export function CommentTextContent(props: ICommentTextContentProps) {
  const comments: IPostComments[] | string = retrieveCommentsValue(props.replies);
  const id = `id_${generateRandomString()}`;

  return (
    <div className={styles.textContent}>
      <CommentMetaData author={props.author} />
      <CommentBody body={props.body} />
      <CommentMenu author={props.author} id={id} />

      <div id={id}></div>

      {typeof comments !== 'string' &&
        (<CommentsList comments={comments} loading={props.loading} errorLoading={props.errorLoading} />)
      }
    </div>
  );
}
