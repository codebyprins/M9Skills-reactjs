'use client'
import './App.css';
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';


export default function Home() {
  const [formValue, setFormValue] = useState({ name: "", tag: "", region: "", server: "" });
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log('form values', form_values);

    setFormValue(form_values);
    router.push(`/tft?name=${form_values.name}&tag=${form_values.tag}&region=${form_values.region}&server=${form_values.server}`);
  }


  return (
    <div className={styles.home}>
      <div className={styles.searchWrapper}>
        <img className={styles.decoration} src='./assets/furyhorn.png' alt=''></img>
        <Image className={styles.tftLogo} src='/assets/TFT_LogoType_Horiz_white.png' alt="TFT Logo" width={450} height={200}></Image>
        <h2 className={styles.subtitle}>Magic 'n Mayhem + Revival: Dawn of heroes</h2>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <div className={styles.searchDropdowns}>
            <div className={styles.regions}>
              <label name="region">Region</label>
              <select id='region' name='region' className={styles.dropdown}>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="sea">SEA</option>
              </select>
            </div>
            <div className={styles.servers}>
              <label name="server">Server</label>
              <select id="server" name="server" className={styles.dropdown}>
                <option value="br1">BR1</option>
                <option value="euw1">EUW1</option>
                <option value="eun1">EUN</option>
                <option value="jp1">JP1</option>
                <option value="kr">KR</option>
                <option value="la1">LA1</option>
                <option value="la2">LA2</option>
                <option value="na1">NA1</option>
                <option value="tr1">TR1</option>
                <option value="ru">RU</option>
                <option value="ph2">PH2</option>
                <option value="sg2">SG2</option>
                <option value="th2">TH2</option>
                <option value="tw2">TW2</option>
                <option value="vn2">VN2</option>
              </select>
            </div>
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