import React from 'react';
import styles from './cardslist.css';
import { Card } from "./Card";
import { usePostsData } from "../../hooks/usePostsData";
import { useDispatch } from "react-redux";
import { setLoadMore } from "../../store/loadMore/loadMoreActions";

export interface IPostsData {
  author: string;
  created: number;
  id: string;
  key: string;
  preview: string;
  title: string;
  ups: number;
  url: string;
}

export function CardsList() {
  const { posts, loading, errorLoading, bottomOfList, loadMoreCount } = usePostsData();
  const dispatch = useDispatch();

  return (
    <ul className={styles.cardsList}>
      {posts.map((post) => (
        <Card
          author={post.author}
          created={post.created}
          id={post.id}
          karma={post.ups}
          key={post.id}
          title={post.title}
          preview={post.preview}
        />
      ))}

      <div ref={bottomOfList} />

      {!loading && loadMoreCount === 3 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{ padding: '10px 20px', border: '1px solid #000', fontSize: '20px', }}
            onClick={() => dispatch(setLoadMore(0))}
          >
            Загрузить еще
          </button>
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center' }}>
          Загрузка...
        </div>
      )}

      {errorLoading && (
        <div role='alert' style={{ textAlign: 'center' }}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
