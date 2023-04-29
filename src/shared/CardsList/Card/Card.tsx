import React from 'react';
import styles from './card.css';
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { Controls } from "./Controls";

interface ICardProps {
  author: string;
  created: number;
  id: string;
  karma: number;
  key: string;
  title: string;
  preview: string;
}

export function Card(props: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent author={props.author} id={props.id} title={props.title} />
      <Preview preview={props.preview} />
      <Menu />
      <Controls karma={props.karma} />
    </li>
  );
}
