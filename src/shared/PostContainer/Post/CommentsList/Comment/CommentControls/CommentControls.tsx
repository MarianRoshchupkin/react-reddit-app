import React from 'react';
import styles from './commentcontrols.css';
import { CommentKarmaCounter } from "./CommentKarmaCounter";

export function CommentControls() {
  return (
    <div className={styles.controls}>
      <CommentKarmaCounter />
      <div className={styles.divider} />
    </div>
  );
}
