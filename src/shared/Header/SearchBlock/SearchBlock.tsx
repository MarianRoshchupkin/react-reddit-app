import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from "./UserBlock";
import { useUserData } from "../../../hooks/useUserData";

export function SearchBlock() {
  const { userData, loading, errorLoading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock
        avatarSrc={userData.iconImg}
        username={userData.name}
        loading={loading}
        errorLoading={errorLoading}
      />
    </div>
  );
}
