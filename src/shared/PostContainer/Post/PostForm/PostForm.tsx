import React, { ChangeEvent, useState } from 'react';
import styles from "./posttform.css";
import { SubmitHandler, useForm } from "react-hook-form";

interface IPostFormTextArea {
  textarea: string;
}

export function PostForm() {
  const [value, setValue] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<IPostFormTextArea>();
  const onSubmit: SubmitHandler<IPostFormTextArea> = (data, event) => {
    event?.preventDefault();
    alert('Форма отправлена');
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register('textarea', { required: true, minLength: {
          value: 4,
          message: 'Введите больше 3-х символов'
        } })}
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      {errors.textarea?.message && (<div>{errors.textarea?.message}</div>)}
      <button className={styles.button} type='submit'>Комментировать</button>
    </form>
  );
}
