import React from "react";
import "../style/home.css";
import Browse from "./Browse";
import MusicSection from "./MusicSection";

function HomePg() {
  return (
    <div className="main">
      {/* <span>Yours Tanvi Patel</span> */}
      <Browse /> {/* Displayed browse component here */}

      <MusicSection /> {/* Displayed Music container component here */}
    </div>
  );
}

export default HomePg;
