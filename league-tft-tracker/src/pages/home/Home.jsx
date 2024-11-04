"use client";

import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import Profile from "./components/profile/profile";

export default function Home() {
  const [formValue, setFormValue] = useState({name:"", tag:""});
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    var formData = new FormData(e.target as HTMLFormElement);
    const form_values = Object.fromEntries(formData) as { name: string; tag: string };
    console.log('form values', form_values);

    setFormValue(form_values)
  }
 
 

  return (
    <div className={styles.home}>
      <div className={styles.searchWrapper}>
        <form className={styles.searchForm} action="" method="post" onSubmit={handleSubmit}>
          <div className={styles.searchNames}>
            <label htmlFor="name">Riot ID</label>
            <input type="text" className={styles.searchName} id="name" name="name" />
          </div>
          <div className={styles.searchTags}>
            <label htmlFor="tag">Tagline #</label>
            <input type="text" className={styles.searchTag} id="tag" name="tag" />
          </div>
          <input type="submit" className={styles.searchSubmit} value="Search" />
        </form>
      </div>
      <Profile name={formValue.name} tag={formValue.tag} />
    </div>
  );
}
