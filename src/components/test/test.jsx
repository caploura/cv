import React, { Component } from "react";
import styles from "./test.module.css";

class Test extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.header}>Test!</h1>
      </div>
    );
  }
}

export default Test;
