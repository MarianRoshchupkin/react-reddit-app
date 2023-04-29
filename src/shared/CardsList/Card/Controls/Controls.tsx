import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from "./KarmaCounter";
import { CommentsButton } from "./CommentsButton";
import { Actions } from "./Actions";

interface IControlsProps {
  karma: number;
}

export function Controls({ karma }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karma={karma} />
      <CommentsButton />
      <Actions />
    </div>
  );
}
