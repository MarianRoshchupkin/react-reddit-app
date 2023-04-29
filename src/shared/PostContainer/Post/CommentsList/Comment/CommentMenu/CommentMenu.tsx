import React from 'react';
import styles from './commentmenu.css';
import { CommentMenuItemsList } from "./CommentMenuItemsList";

interface ICommentMenuProps {
  author: string;
  id: string;
}

export function CommentMenu({ author, id }: ICommentMenuProps) {
  return (
    <CommentMenuItemsList author={author} id={id} />
  );
}
