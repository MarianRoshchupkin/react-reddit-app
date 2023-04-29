import React from 'react';
import styles from './commentmetadata.css';

interface ICommentMetaDataProps {
  author: string;
}

export function CommentMetaData({ author }: ICommentMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src='https://i.pravatar.cc/100'
          alt='avatar'
        />
        <a className={styles.username} href='#user-url'>{author}</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад
      </span>
    </div>
  );
}
