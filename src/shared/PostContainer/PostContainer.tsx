import React  from 'react';
import { IPostsData } from "../CardsList";
import { Post } from "./Post";
import { usePostsData } from "../../hooks/usePostsData";
import { usePostComments } from "../../hooks/usePostComments";
import { useParams } from "react-router-dom";

export function PostContainer() {
  const { posts } = usePostsData();
  const { id } = useParams() as { id: string };
  const { comments, loading, errorLoading } = usePostComments(id);

  function retrieveCardData(posts: IPostsData[], id: string): IPostsData[] {
    return posts.filter((item) => {
      if (item.id === id)
        return item;
    });
  }

  const [postData] = retrieveCardData(posts, id);
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return (
    <Post
      posts={postData}
      comments={comments}
      loading={loading}
      errorLoading={errorLoading}
      id={id}
      node={node}
    />
  );
}
