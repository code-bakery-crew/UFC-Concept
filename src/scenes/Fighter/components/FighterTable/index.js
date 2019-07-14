import React from "react";
import watchReplayLogo from "./images/watchReplayLogo.png";

import styles from "./styles.module.css";

const FighterTable = ({ fighterName, fights }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.tableHead}>Result</th>
        <th className={styles.tableHead}>Fighters</th>
        <th className={styles.tableHead}>Event</th>
        <th className={styles.tableHead}>Str</th>
        <th className={styles.tableHead}>TD</th>
        <th className={styles.tableHead}>Sub</th>
        <th className={styles.tableHead}>Pass</th>
        <th className={styles.tableHead}>Method</th>
        <th className={styles.tableHead}>Replay</th>
        <th className={styles.tableHead}>Awards</th>
      </tr>
    </thead>
    <tbody>
      {fights.map(fight => (
        <tr key={fight.event}>
          <td className={styles.resultImageColumn}>
              <img
                className={styles.resultImage}
                src={`/images/fightResults/${fight.result}Image.png`}
                alt="ResultImage"
              />
          </td>
          <td className={styles.fightersColumn}>
            {fighterName}<br/><p className={styles.textGrayed}>{fight.opponent}</p>
          </td>
          <td className={styles.eventColumn}>{fight.event}<br/>{fight.date}</td>
          <td className={styles.statisticsColumn}>
            {fight.fighterStatistics.str}<br/><p className={styles.textGrayed}>{fight.opponentStatistics.str}</p>
          </td>
          <td className={styles.statisticsColumn}>
            {fight.fighterStatistics.td}<br/><p className={styles.textGrayed}>{fight.opponentStatistics.td}</p>
          </td>
          <td className={styles.statisticsColumn}>
            {fight.fighterStatistics.sub}<br/><p className={styles.textGrayed}>{fight.opponentStatistics.sub}</p>
          </td>
          <td className={styles.statisticsColumn}>
            {fight.fighterStatistics.pass}<br/><p className={styles.textGrayed}>{fight.opponentStatistics.pass}</p>
          </td>
          <td className={styles.methodColumn}>{fight.method}</td>
          <td className={styles.watchReplayColumn}>
            <a href={fight.replay} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.watchReplay}
                src={watchReplayLogo}
                alt="WatchReplay"
              />
            </a>
          </td>
          <td><p className={styles.textNormal}>{fight.awards}</p></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FighterTable;
