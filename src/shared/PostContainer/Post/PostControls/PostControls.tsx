import React from 'react';
import styles from './postcontrols.css';
import { PostKarmaCounter } from "./PostKarmaCounter";
import { PostTextContent } from "./PostTextContent";

interface IPostControlsProps {
  author: string;
  id: string;
  karma: number;
  title: string;
}

export function PostControls(props: IPostControlsProps) {
  return (
    <div className={styles.controls}>
      <PostKarmaCounter karma={props.karma} />
      <PostTextContent author={props.author} id={props.id} title={props.title} />
    </div>
  );
}
