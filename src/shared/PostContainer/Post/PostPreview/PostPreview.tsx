import React from 'react';
import styles from './postpreview.css';

interface IPostPreviewProps {
  preview: string;
}

export function PostPreview({ preview }: IPostPreviewProps) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={preview} alt='Preview image' />
    </div>
  );
}
