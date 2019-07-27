import styles from "./styles.module.css";
import React, { useState } from "react";
import { isBrowser } from "react-device-detect";
import { Collapse } from "@material-ui/core";
import ArrowDown from "@material-ui/icons/ArrowDropDown"
import ArrowUp from "@material-ui/icons/ArrowDropUp"

const SummaryTableRow = ({ event }) => {
  const [open, setOpen] = useState(false);
  const elements = [
    <td>
      <div className={styles.statusBox}>{event.status}</div>
      {isBrowser ? null : <div>{open ? <ArrowUp/> : <ArrowDown/>}</div>}
      <Collapse in={open} className={styles.mobileDetails}>
        <p>Event: {`${event.event[0]} ${event.event[1]}`}</p>
        <p>Start time: {event.start_time}</p>
        <p>Method: {event.method}</p>
        <p>Final round length: {event.final_round_length}</p>
      </Collapse>
    </td>,
    <td>
      <div style={{ fontWeight: open ? 'bold' : 'normal' }}>{event.fighters[0]}</div>
      <div className={styles.red}>vs</div>
      <div style={{ fontWeight: open ? 'bold' : 'normal' }}>{event.fighters[1]}</div>
      {open ? <div/> : null}
      <Collapse in={open} className={styles.mobileDetails}>
        <p>Venue: {event.venue}</p>
        <p>Winner: {event.winner}</p>
        <p>Final round: {event.final_round}</p>
      </Collapse>
    </td>,
    <td>
      <div>{event.event[0]}</div>
      <div>{event.event[1]}</div>
    </td>,
    <td>{event.venue}</td>,
    <td>{event.start_time}</td>,
    <td>{event.winner}</td>,
    <td>{event.method}</td>,
    <td>{event.final_round}</td>,
    <td>{event.final_round_length}</td>,
  ];
  return (
    <tr key={`row-${event.id}`} onClick={() => isBrowser ? null : setOpen(!open)}>
      {isBrowser ? elements.map(e => e) : elements.slice(0, 2).map(e => e)}
    </tr>
  );
};

export default SummaryTableRow;
