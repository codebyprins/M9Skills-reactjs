import React from 'react';
import '../../App.css';
import styles from './page.module.css';
import { after } from 'node:test';

async function Details({ searchParams }) {
  const { matchId, region, server, puuid, name, tag } = await searchParams;
  const riotApiKey = process.env.RIOT_API_KEY;

  let summonerUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${riotApiKey}`;
  const summonerResponse = await fetch(summonerUrl)
  const summoner = await summonerResponse.json();

  let matchUrl = `https://${region}.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotApiKey}`
  const matchResponse = await fetch(matchUrl);
  const matchData = await matchResponse.json();
  console.log(matchData);

  const afterUnderscore = (input) => {
    const splitParts = input.lastIndexOf('_');

    const selectLastPart = input.substring(splitParts + 1);

    const format = selectLastPart.replace(/([A-Z])/g, ' $1').trim();
    return format
  }
  const duration = (time) => {
    console.log(time);
    let timePlayed = Math.floor(time / 60);

    return timePlayed
  }
  return (
    <div className={styles.home}>
      <div className={styles.personalInfo}>
        {matchData.info.participants.map((participant) => {
          if (participant.puuid === puuid) {
            return (
              <>
                <div className={styles.generalInfo}>
                  <h1 className={styles.summoner}>{name} #{tag}</h1>
                  <figure className={styles.summonerProfile}>
                    <img className={styles.summonerIcon} src={`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/profileicon/${summoner.profileIconId}.png`} alt='summonericon'></img>
                    <p className={styles.summonerLevel}>{summoner.summonerLevel}</p>
                  </figure>
                  <div className={styles.set}>
                    <h2 className={styles.detailsH2}>{matchData.info.tft_game_type}:</h2>
                    <h2 className={styles.detailsH2}>{afterUnderscore(matchData.info.tft_set_core_name)}</h2>
                  </div>
                  <p>{duration(participant.time_eliminated)} minutes</p>
                  <div className={`${styles.rank} ${participant.placement === 1
                    ? styles.gold
                    : participant.placement === 2
                      ? styles.silver
                      : participant.placement === 3
                        ? styles.bronze
                        : styles.displayNone
                    }`}>
                    <p>Place:</p>
                    <h2>{participant.placement}</h2>
                  </div>
                  <div className={styles.level}>
                    <p>Level:</p>
                    <h2>{participant.level}</h2>
                  </div>
                </div>
                <div className={styles.generalInfo}>
                  <div className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Augments:</h2>
                    <ul className={styles.augments}>
                      {participant.augments.map((augment, index) => (
                        <li className={styles.augment} key={index}>{afterUnderscore(augment)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Traits:</h2>
                    <ul className={styles.traits}>
                      {participant.traits.map((trait, index) => (
                        <li className={`${styles.trait} ${trait.style === 0
                          ? styles.iron
                          : trait.style === 1
                            ? styles.bronze
                            : trait.style === 2
                              ? styles.bronze
                              : trait.style === 3
                                ? styles.silver
                                : trait.style === 4
                                  ? styles.gold
                                  : trait.style === 5
                                    ? styles.platinum
                                    : styles.displayNone
                          }`} key={index}>{afterUnderscore(trait.name)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Champions:</h2>
                    <ul className={styles.champions}>
                      {participant.units.map((unit, index) => (
                        <li className={styles.unit} key={index}>
                          <img className={`${styles.championImg} ${unit.tier === 0
                            ? styles.iron
                            : unit.tier === 1
                              ? styles.bronze
                              : unit.tier === 2
                                ? styles.silver
                                : unit.tier === 3
                                  ? styles.gold
                                  : unit.tier === 4
                                    ? styles.platinum
                                    : styles.displayNone
                            }`} src={`/assets/tft-champion/${unit.character_id}.png`} alt={afterUnderscore(unit.character_id)} title={afterUnderscore(unit.character_id)}></img>
                          <div className={styles.itemsImgs}>
                            {unit.itemNames.map((item, index) => (
                              <img className={styles.item} src={`/assets/tft-item/${item}.png`} alt={afterUnderscore(item)} title={afterUnderscore(item)} key={index}></img>
                            ))}
                            <div className={styles.itemsImgs}>
                            {unit.itemNames.map((item, index) => (
                              <img className={styles.item} src={`/assets/tft-item/${item}.png`} alt={afterUnderscore(item)} title={afterUnderscore(item)} key={index}></img>
                            ))}
                          </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Other participants:</h2>
                    <ul className={styles.participants}>
                      {matchData.info.participants.map((participant, index) => (
                        <li className={`${styles.participant} ${participant.puuid === puuid ? styles.displayNone : styles.displayBlock}`} key={index}>
                          <div className={styles.participantInfo}>
                            <h2 className={styles.infoTitle}>{participant.riotIdGameName}</h2>
                            <h2 className={styles.infoTitle}>#{participant.riotIdTagline}</h2>
                          </div>
                          <ul className={styles.participantTraits}>
                            {}
                          </ul>
                          <ul className={styles.participantChampions}>
                            {}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )
          }
        })}
      </div>
    </div >
  )
}

export default Details
