import React from "react";
import Search from "../search";

const Artist = [
  {
    id: "01",
    name: "Arijit Singh",
    songs: [
      "public/songs/Bekhayali Kabir Singh 128 Kbps.mp3",
      "public/songs/Daayre Dilwale 128 Kbps.mp3",
      "public/songs/Tenu Sang Rakhna Jigra 128 Kbps.mp3",
      "",
    ],
    poster: "",
  },
  {
    id: "02",
    name: "Lana Del Rey",
    songs: [
      "public/songs/Diet-Mountain-Dew.mp3",
      "public/songs/Lana_Del_Rey_-_Young_And_Beautiful_CeeNaija.com_.mp3",
    ],
    poster: "",
  },
];

function Artists() {
  return (
    <div className="main-container">
      <h2>Artists</h2>
    </div>
  );
}

export default Artists;
