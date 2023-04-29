import React from 'react';
import styles from './textcontent.css';
import { MetaData } from "./MetaData";
import { Title } from "./Title";

interface ITextContentProps {
  author: string;
  id: string;
  title: string;
}

export function TextContent({ author, id, title }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <MetaData author={author} />
      <Title id={id} title={title} />
    </div>
  );
}
