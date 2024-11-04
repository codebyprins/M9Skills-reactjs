import React from 'react';
import '../../App.css';
import styles from './page.module.css';

async function Details({ searchParams }) {
  const { matchId, region, puuid, name, tag } = await searchParams;
  console.log(puuid);
  const riotApiKey = process.env.RIOT_API_KEY;

  let matchUrl = `https://${region}.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotApiKey}`
  const matchResponse = await fetch(matchUrl);
  const matchData = await matchResponse.json();
  console.log(matchData);


  return (
    <div className={styles.home}>
      <div className={styles.matchInfo}>
        {matchData.info.participants.map((participant) => {
          if (participant.puuid === puuid) {
            return (
              <div className={styles.generalInfo}>
                <h1 className={styles.summoner}>{name} #{tag}</h1>
                <h2 className={styles.detailsH2}>{matchData.info.tft_game_type}</h2>
                <div className={styles.rank}>
                  <p>Place:</p>
                  <h2>{participant.placement}</h2>
                </div>
                <div className={styles.level}>
                  <p>Level:</p>
                  <h2>{participant.level}</h2>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Details
