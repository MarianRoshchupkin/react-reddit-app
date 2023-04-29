import React from 'react';
import styles from './posttextcontent.css';
import { PostMetaData } from "./PostMetaData";
import { PostTitle } from "./PostTitle";

interface IPostTextContentProps {
  author: string;
  id: string;
  title: string;
}

export function PostTextContent({ author, id, title }: IPostTextContentProps) {
  return (
    <div className={styles.textContent}>
      <PostMetaData author={author} />
      <PostTitle id={id} title={title} />
    </div>
  );
}
