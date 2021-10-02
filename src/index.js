import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ProfileCard from "./components/profileCard/profileCard";
import Test from "./components/test/test";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <ProfileCard />
      <Test />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
