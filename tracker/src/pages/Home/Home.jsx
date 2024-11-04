"use client";

import styles from "./Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [formValue, setFormValue] = useState({ name: "", tag: "", region: ""});

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log('form values', form_values);

    setFormValue(form_values);
    router.push(`/summoner?name=${formValue.name}&region=${formValue.region}`);
  }



  return (
    <div className={styles.home}>
      <div className={styles.searchWrapper}>
        <h1 className={styles.title}>TEAMFIGHT TACTICS</h1>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <div className={styles.searchRegion}>
            <label name="region">Region</label>
            <select id="region" name="region" className={styles.regionDropdown}>
              <option value="europe">EUW</option>
              <option value="EUE">EUE</option>
              <option value="NA">NA</option>
            </select>
          </div>
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
    </div>
  );
}
