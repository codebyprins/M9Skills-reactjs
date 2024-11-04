import React from 'react';
import styles from './page.module.css'

function Modal(name, place) {
  return (
    <div className=''>
        <h2 className={styles.modalh2}>{name}</h2>
        <h2 className={styles.modalh2}>{place}</h2>
    </div>
  )
}

export default Modal
