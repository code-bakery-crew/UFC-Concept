import React from "react";
import Share from "@material-ui/icons/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "./styles.module.css";

const ShareIcon = () => {
  //Alert to be changed to notification

  return (
    <div className={styles.shareContainer}>
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => alert("Copied!")}
      >
        <Share className={styles.shareIcon} />
      </CopyToClipboard>
    </div>
  );
};

export default ShareIcon;
