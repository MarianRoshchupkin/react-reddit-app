import React from 'react';
import styles from './header.css';
import { ThreadTitle } from "./ThreadTitle";
import { SortBlock } from "./SortBlock";
import { SearchBlock } from "./SearchBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SortBlock />
      <SearchBlock />
    </header>
  );
}
