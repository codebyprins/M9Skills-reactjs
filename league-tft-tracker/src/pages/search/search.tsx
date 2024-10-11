import styles from './search.module.scss';
import Riot from '../../assets/002_RG_2021_FULL_LOCKUP_OFFWHITE.png'
import TFT from '../../assets/TFT_Logotype_Horiz_White.png'
import League from '../../assets/lol-logo-rendered-hi-res.png'
import Kayle from '../../assets/kayle.png'
import Nami from '../../assets/nami.png'
import Poro from '../../assets/poro.png'

function Search() {

  return (
    <div className={styles.container}>
      <img className={styles.imgLeft} src={Kayle} alt=''></img>
      <img className={styles.imgRight} src={Nami} alt=''></img>
      <figure className={styles.orb}>
        <img className={styles.poro} src={Poro} alt=''></img>
      </figure>
      <figure className={styles.logo}>
        <img className={styles.logoImg} src={Riot} alt=''></img>
      </figure>
      <div className={styles.searchWrapper}>
        <div className={styles.searchTile}>
          <figure className={styles.logo}>
            <img className={styles.logoImg} src={League} alt=''></img>
          </figure>
          <form action="">
            <label className={styles.searchLabel}>Enter Username + Tag:</label>
            <input type="text" className={styles.searchBar} id="search" name="search" value="Out of Order!"></input>
          </form>
        </div>
        <div className={styles.searchTile}>
          <figure className={styles.logo}>
            <img className={styles.logoImg} src={TFT} alt=''></img>
          </figure>
          <form action="">
            <label className={styles.searchLabel}>Enter Username + Tag:</label>
            <input type="text" className={styles.searchBar} id="search" name="search"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
