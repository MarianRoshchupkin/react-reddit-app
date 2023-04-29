import React from 'react';
import styles from './commentbody.css';

interface ICommentBodyProps {
  body: string;
}

export function CommentBody({ body }: ICommentBodyProps) {
  return (
    <div className={styles.body}>
      <p className={styles.text}>{body}</p>
    </div>
  );
}
