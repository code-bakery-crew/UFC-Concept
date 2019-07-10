import React from "react";

const FighterTable = ({ fighterName, fights }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Result</th>
          <th>Fighters</th>
          <th>Event</th>
          <th>Str</th>
          <th>TD</th>
          <th>Sub</th>
          <th>Pass</th>
          <th>Method</th>
          <th>Replay</th>
          <th>Awards</th>
        </tr>
      </thead>
      <tbody>
        {fights.map(fight => (
          <tr key={fight.event}>
            <td>{fight.result}</td>
            <td>
              {fighterName} {fight.opponent}
            </td>
            <td>{fight.event}</td>
            <td>dupa</td>
            <td>dupa</td>
            <td>dupa</td>
            <td>dupa</td>
            <td>{fight.method}</td>
            <td>{fight.replay}</td>
            <td>{fight.awards}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FighterTable;

// awards: "Performance of the Night"
// date: "Nov 12.2016"
// event: "UFC 205"
// fighterStatistics: {str: 32, td: 0, sub: 0, pass: 0}
// id: 1
// method: "R2 KO/TKO"
// opponent: "Eddie Alvarez"
// opponentStatistics: {str: 9, td: 0, sub: 0, pass: 0}
// replay: "https://www.youtube.com/watch?v=lfVeIHqWsZY"
