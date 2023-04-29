import React from 'react';
import styles from './userblock.css';
import { Break} from "../../../Break";
import { EColors, Text } from "../../../Text";
import { EIcons, Icon } from "../../../Icons/Icon";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
  errorLoading?: string;
}

export function UserBlock({ avatarSrc, username, loading, errorLoading }: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href="https://www.reddit.com/api/v1/authorize?client_id=PdUvWMuL-AAdSb-dOI-2lA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
    >
      <div className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc
            ? <img className={styles.avatarImage} src={avatarSrc} alt='user avatar' />
            : <Icon name={EIcons.anon} size={50} />
          }
        </div>

        <div className={styles.username}>
          <Break size={12} />

          {loading ? (
            <Text size={20} color={EColors.grey99}>Загрузка...</Text>
          ) : (
            <Text size={20} color={username ? EColors.black : EColors.grey99}>
              {errorLoading ? errorLoading : username || 'Аноним'}
            </Text>
          )}
        </div>
      </div>
    </a>
  );
}
