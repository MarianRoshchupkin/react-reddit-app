import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './commentmenuitemslist.css';
import { CommentFormControlled } from "../../CommentFormControlled";
import { useFocus } from "../../../../../../../hooks/useFocus";
import { EIcons, Icon } from "../../../../../../Icons/Icon";
import { EColors, Text } from "../../../../../../Text";

interface ICommentMenuItemslistProps {
  author: string;
  id: string;
}

export function CommentMenuItemsList({ author, id }: ICommentMenuItemslistProps) {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [element, setElement] = useState<Element>();
  const [textareaRef, setTextareaFocus] = useFocus();

  useEffect(() => {
    const node = document.querySelector(`#${id}`);
    if (node) setElement(node);
  }, []);

  if (!element) return null;

  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <button
          className={styles.menuButton}
          onClick={() => {
            setIsFormOpened(!isFormOpened)

            if (isFormOpened) {
              setTextareaFocus;
            }
          }}
        >
          <Icon name={EIcons.reply} size={16} />
          <Text size={12} color={EColors.grey99}>Ответить</Text>
        </button>
      </li>
      <li className={styles.menuItem}>
        <button className={styles.menuButton}>
          <Icon name={EIcons.share} size={16} />
          <Text size={12} color={EColors.grey99}>Поделиться</Text>
        </button>
      </li>
      <li className={styles.menuItem}>
        <button className={styles.menuButton}>
          <Icon name={EIcons.warning} size={16} />
          <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
        </button>
      </li>

      {isFormOpened && (
        ReactDOM.createPortal(<CommentFormControlled author={author} />, element)
      )}
    </ul>
  );
}
