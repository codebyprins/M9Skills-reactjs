import React from 'react';
import '../App.css';
import styles from './page.module.css';
import Link from 'next/link';

export default async function SummonerPage({ searchParams }) {
  const { name, tag, region, server } = await searchParams;
  console.log(searchParams);

  const riotApiKey = process.env.RIOT_API_KEY;

  //for puuid from username + tagline
  let accountUrl = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${riotApiKey}`
  console.log(accountUrl);
  const accountResponse = await fetch(accountUrl)
  if (!accountResponse.ok) {
    const error = await accountResponse.json();
    console.error("Error fetching account:", error);
    return "Summoner not found or api key expired";
  }
  const account = await accountResponse.json();
  console.log(account);

  const puuid = account.puuid;

  // for profile icon number
  let summonerUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${riotApiKey}`;
  const summonerResponse = await fetch(summonerUrl)
  const summoner = await summonerResponse.json();
  console.log(summoner);

  // for last 5 matches played
  let matchesUrl = `https://${region}.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${riotApiKey}`;
  const matchesResponse = await fetch(matchesUrl)
  const matches = await matchesResponse.json();
  console.log(matches);

  // for data from a single match
  const matchDetails = await Promise.all(
    matches.map(async (matchId) => {
      const matchResponse = await fetch(`https://${region}.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotApiKey}`);
      return matchResponse.json();
    })
  );
  console.log(matchDetails);

  const afterUnderscore = (input) => {
    const splitParts = input.lastIndexOf('_');
    const selectLastPart = input.substring(splitParts + 1);
    const format = selectLastPart.replace(/([A-Z])/g, ' $1').trim();
    return format
  }

  return (
    <div className={styles.home}>
      <section className={styles.account}>
        {account || matches ? (
          <>
            <h1 className={styles.accounth1}>{account.gameName}</h1>
            <h3>#{account.tagLine}</h3>
            <figure className={styles.summonerProfile}>
              <img className={styles.summonerIcon} src={`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/profileicon/${summoner.profileIconId}.png`} alt='summonericon'></img>
              <p className={styles.summonerLevel}>{summoner.summonerLevel}</p>
            </figure>

          </>
        ) : (<p>No summoner found.</p>
        )}
      </section>
      {matches ? (
        <ul className={styles.matches}>
          {matchDetails.map((match, index) => (
            <li className={styles.match} key={index}>
              <div className={styles.set}>
                <p>{match.info.tft_game_type}</p>
                <p>{afterUnderscore(match.info.tft_set_core_name)}</p>
              </div>
              {match.info.participants.map((participant) => {
                if (participant.puuid === puuid) {
                  return (
                    <div className={styles.participantInfo}>
                      <div className={styles.rank}>
                        <p>Place:</p>
                        <h2 key={participant.puuid}>{participant.placement}</h2>
                      </div>
                      <ul className={styles.traits}>
                        {participant.traits.map((trait, index) => (
                          <li className={styles.trait} key={index}>
                            <img className={styles.traitImg} src={`/assets/tft-trait/${trait.name}.png`} alt={afterUnderscore(trait.name)} title={afterUnderscore(trait.name)}></img>
                            </li>
                        ))}
                      </ul>
                      <ul className={styles.champions}>
                        {participant.units.map((champion, index) => (
                          <li className={styles.champion} key={index}>
                            <img className={styles.championImg} src={`/assets/tft-champion/${champion.character_id}.png`} alt={afterUnderscore(champion.character_id)} title={afterUnderscore(champion.character_id)}></img>
                            <div className={styles.itemsImgs}>
                            {champion.itemNames.map((item, index) => (
                              <img className={styles.item} src={`/assets/tft-item/${item}.png`} alt={afterUnderscore(item)} title={afterUnderscore(item)} key={index}></img>
                            ))}
                          </div>
                            </li>
                        ))}
                        
                      </ul>
                    </div>
                  );
                } else {
                  console.log("no participant data found");
                }

              })}
              <Link className={styles.link} href={`/tft/details?matchId=${match.metadata.match_id}&region=${region}&server=${server}&puuid=${account.puuid}&name=${name}&tag=${tag}`}>{'>'}</Link>
            </li>
          ))}
        </ul>
      ) : (<p>No matches found</p>)}
    </div>
  );
}
