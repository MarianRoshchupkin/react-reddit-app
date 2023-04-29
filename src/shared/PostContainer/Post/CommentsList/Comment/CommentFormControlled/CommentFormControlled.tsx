import React from 'react';
import styles from './commentformcontrolled.css';
import { useFocus } from "../../../../../../hooks/useFocus";

interface ICommentFormControlledProps {
  author: string;
}

export function CommentFormControlled({ author }: ICommentFormControlledProps) {
  const [value, onChange] = React.useState(`${author}, `);
  const [textareaRef, setTextareaFocus] = useFocus();

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} ref={textareaRef} />
      <button className={styles.button} type='submit'>Комментировать</button>
    </form>
  );
}
