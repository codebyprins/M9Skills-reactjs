import React from 'react';
import styles from './Profile.module.css';

function Profile({ name, tag, region, ppi }) {
  return (
    <div className={styles.container}>
      <img className={styles.profileIcon} src="" alt="{ppi}"></img>
      <article className={styles.accountName}>
        <h2 className={styles.userName}>{name}</h2>
        <h3 className={styles.tagline}>#{tag}</h3>
      </article>
    </div>
  )
}

export default Profile
