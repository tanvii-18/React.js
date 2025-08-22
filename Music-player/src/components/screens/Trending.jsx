import React from "react";
import "../../style/screens.css";
import songsData from "../../../public/db.json";
import Player from "../screens/player";

function TrendingSongs() {
  const trending = songsData.playlist.filter((song) => song.Trending);

  return <Player songs={trending} title="Trending Songs" />;
}

export default TrendingSongs;
