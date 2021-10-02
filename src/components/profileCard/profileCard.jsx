import React, { Component } from "react";
import styles from "./profileCard.module.css";

class ProfileCard extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.header}>Welcome!</h1>
      </div>
    );
  }
}

export default ProfileCard;
