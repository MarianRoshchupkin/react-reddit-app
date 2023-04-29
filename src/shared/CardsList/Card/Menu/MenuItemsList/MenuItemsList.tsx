import React from 'react';
import styles from './menuitemslist.css';
import { EColors, Text } from '../../../../Text'
import { EIcons, Icon } from "../../../../Icons/Icon";

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcons.comments} size={16} />
        <Text size={12} color={EColors.grey99}>Комментарии</Text>
      </li>
      
      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.share} size={16} />
        <Text size={12} color={EColors.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider} />
      
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.block} size={16} />
        <Text size={12} color={EColors.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider} />
      
      <li className={styles.menuItem}>
        <Icon name={EIcons.save} size={16} />
        <Text size={12} color={EColors.grey99}>Сохранить</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={16} />
        <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
