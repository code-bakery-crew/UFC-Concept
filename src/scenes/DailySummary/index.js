import React, { useState } from 'react'
import styles from './styles.module.css';
import Navigation from "../../components/Navigation";
import summaryEvents from '../../services/data/summaryEvents';
import SummaryTableRow from "./components/SummaryTableRow";
import ArrowRight from '@material-ui/icons/ArrowRightOutlined'
import ArrowLeft from '@material-ui/icons/ArrowLeftOutlined'
import IconButton from "@material-ui/core/IconButton";
import { isBrowser } from "react-device-detect";

const DailySummary = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(summaryEvents.eventData.length / 4);
  const genHeader = header => <th style={{ width: `calc(100%/${isBrowser ? 9 : 2})` }}>{header}</th>;
  const headers = [
    'Status',
    'Fighters',
    'Event',
    'Venue',
    'Start time',
    'Winner',
    'Method',
    'Final round',
    'Final round length'
  ];
  return (
    <div>
      <Navigation/>
      <div style={{ width: '100%' }}>
        <table className={styles.summaryTable}>
          <thead>
          <tr>
            {isBrowser ? headers.map(genHeader) : headers.slice(0, 2).map(genHeader)}
          </tr>
          </thead>
          <tbody>
          {summaryEvents.eventData.slice((page - 1) * 4, page * 4).map(row => <SummaryTableRow event={row}/>)}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <IconButton disabled={page <= 1} onClick={() => setPage(page - 1)} href={'#'}>
          <ArrowLeft/>
        </IconButton>
        <span>{`${page}/${totalPages}`}</span>
        <IconButton disabled={page >= totalPages} onClick={() => setPage(page + 1)} href={"#"}>
          <ArrowRight/>
        </IconButton>
      </div>
    </div>
  );
};

export default DailySummary;
