import React from 'react';
import styles from './title.css';
import { Link } from "react-router-dom";

interface ITitleProps {
  id: string;
  title: string;
}

export function Title({ id, title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link className={styles.postLink} to={`/posts/${id}`}>
        {title}
      </Link>
    </h2>
  );
}
