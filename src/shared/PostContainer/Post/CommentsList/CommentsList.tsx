import React from 'react';
import { Comment } from "./Comment";
import { IPostComments } from "../../../../hooks/usePostComments";

interface ICommentsListProps {
  comments: IPostComments[];
  loading: boolean;
  errorLoading: string;
}

export function CommentsList({ comments, loading, errorLoading }: ICommentsListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id}
          replies={comment.replies}
          loading={loading}
          errorLoading={errorLoading}
        />
      ))}

      {loading && (
        <div style={{ textAlign: 'center' }}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role='alert' style={{ textAlign: 'center' }}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
