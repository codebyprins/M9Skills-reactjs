"use client"; 

import { useState } from 'react';
import styles from './page.module.css';
import Modal from './modal';

export default function openModal() {
    const [modalOpen, setModalOpen] = useState(false);

  function handleClick(){
    setModalOpen(!modalOpen);
    console.log("click")
  };

  function closeModal(){
    setModalOpen(false);
  }


  return (
    <div className={styles.interactive}>
      <button onClick={handleClick} className={styles.button}>
      {modalOpen ? "Close Modal" : "Open Modal"}
      </button>
    </div>
  );
}