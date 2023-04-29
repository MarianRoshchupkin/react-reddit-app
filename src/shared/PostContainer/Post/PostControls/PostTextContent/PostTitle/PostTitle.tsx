import React from 'react';
import styles from './posttitle.css';
import { Link } from "react-router-dom";

interface IPostTitleProps {
  id: string;
  title: string;
}

export function PostTitle({ id, title }: IPostTitleProps) {
  return (
    <h2 className={styles.title}>
      <Link className={styles.postLink} to={`/posts/${id}`}>
        {title}
      </Link>
    </h2>
  );
}
