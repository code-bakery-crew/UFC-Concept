import React from "react";
import Share from "@material-ui/icons/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from '@material-ui/core/Snackbar';

import styles from "./styles.module.css";

const ShareIcon = () => {
  const [notifyOpen, setNotifyOpen] = React.useState(false);

  return (
    <div className={styles.shareContainer}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={notifyOpen}
        autoHideDuration={2000}
        onClose={() => setNotifyOpen(false)}
        message="URL copied to clipboard!"
      />
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => setNotifyOpen(true)}
      >
        <Share className={styles.shareIcon} />
      </CopyToClipboard>
    </div>
  );
};

export default ShareIcon;
